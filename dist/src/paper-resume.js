import * as THREE from "three";
import { RESUMES } from "./resumes.js";

export const PAPER_DESIGNS = RESUMES;
const W = 1024;
const H = 1400;
const INK = "#252923";
const MUTED = "#657067";
const states = [];
const sans = '"Noto Sans SC", "Microsoft YaHei", sans-serif';
const serif = '"Noto Serif SC", "Songti SC", serif';

function font(size, weight = 400, family = sans) {
  return `${weight} ${size}px ${family}`;
}

function line(ctx, x1, y1, x2, y2, color = "#c7cec5", width = 2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

function paragraph(ctx, tokens, separator, y, leading) {
  let lineText = "";
  for (const token of tokens) {
    const next = lineText ? lineText + separator + token : token;
    if (lineText && ctx.measureText(next).width > 848) {
      ctx.fillText(lineText, 88, y);
      y += leading;
      lineText = token;
    } else {
      lineText = next;
    }
  }
  ctx.fillText(lineText, 88, y);
  return y + leading;
}

function section(ctx, title, y, accent) {
  ctx.fillStyle = accent;
  ctx.fillRect(88, y - 20, 8, 31);
  ctx.fillStyle = INK;
  ctx.font = font(31, 700);
  ctx.fillText(title, 113, y + 4);
  line(ctx, 88, y + 23, 936, y + 23);
  return y + 65;
}

function draw(ctx, resume) {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#f0eee6";
  ctx.fillRect(0, 0, W, H);

  // 轻微纤维纹理与方格，折叠后仍保留原演示的纸感。
  ctx.strokeStyle = "rgba(117,136,121,.12)";
  ctx.lineWidth = 1;
  for (let x = 32; x < W; x += 48) line(ctx, x, 0, x, H, "rgba(117,136,121,.12)", 1);
  for (let y = 32; y < H; y += 48) line(ctx, 0, y, W, y, "rgba(117,136,121,.12)", 1);
  ctx.fillStyle = "rgba(255,255,255,.25)";
  ctx.fillRect(60, 56, 904, 1288);

  ctx.fillStyle = resume.accent;
  ctx.fillRect(0, 0, W, 18);
  ctx.fillStyle = INK;
  ctx.textBaseline = "alphabetic";
  ctx.font = font(32, 600);
  ctx.fillText("候选人编号 / Candidate ID", 88, 108);
  ctx.font = font(92, 700, serif);
  ctx.fillText(resume.id, 83, 218);
  ctx.font = font(43, 600);
  ctx.fillText(resume.role.zh + " / " + resume.role.en, 88, 294);
  ctx.fillStyle = MUTED;
  ctx.font = font(36);
  const days = resume.days.toLocaleString("en-US");
  ctx.fillText("出壳第 " + days + " 天 / " + days + " days since hatching", 88, 360);

  for (const [label, copy, y] of [
    ["鸡舍战绩 / Coop record", resume.project, 451],
    ["看家本领 / Coop skills", resume.skills, 765],
    ["破壳文凭 / Diploma", resume.education, 1079],
  ]) {
    const top = section(ctx, label, y, resume.accent);
    ctx.font = font(41, 500);
    const afterChinese = paragraph(ctx, Array.from(copy.zh), "", top, 51);
    ctx.fillStyle = MUTED;
    ctx.font = font(36);
    paragraph(ctx, copy.en.split(" "), " ", afterChinese + 7, 44);
  }
  line(ctx, 88, 1370, 936, 1370, INK, 2);
}

if (document.fonts) {
  document.fonts.ready.then(() => {
    for (const state of states) {
      if (!state) continue;
      draw(state.ctx, state.resume);
      state.texture.needsUpdate = true;
    }
  });
}

function materialFor(index) {
  const i = index % RESUMES.length;
  if (states[i]) return states[i].material;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  draw(ctx, RESUMES[i]);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.rotation = Math.PI;
  texture.center.set(0.5, 0.5);
  texture.repeat.set(1, -1);
  const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.94, side: THREE.DoubleSide });
  states[i] = { ctx, resume: RESUMES[i], texture, material };
  return material;
}

export function createPaper(animData, designIndex = 0) {
  const { vertexCount, indices, uvs, positions, normals } = animData;
  const geometry = new THREE.BufferGeometry();
  const positionAttr = new THREE.BufferAttribute(new Float32Array(positions.subarray(0, vertexCount * 3)), 3);
  const normalAttr = new THREE.BufferAttribute(new Float32Array(normals.subarray(0, vertexCount * 3)), 3);
  positionAttr.setUsage(THREE.DynamicDrawUsage);
  normalAttr.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute("position", positionAttr);
  geometry.setAttribute("normal", normalAttr);
  geometry.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs), 2));
  geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));
  const mesh = new THREE.Mesh(geometry, materialFor(designIndex));
  return { mesh, positionAttr, normalAttr, designIndex };
}

export function updatePaperFrame(paper, animData, frameIdx) {
  const { vertexCount, frameCount, positions, normals } = animData;
  const len = vertexCount * 3;
  const f0 = Math.floor(frameIdx);
  const t = frameIdx - f0;
  const f1 = Math.min(f0 + 1, frameCount - 1);
  const off0 = f0 * len;
  const off1 = f1 * len;
  const dstP = paper.positionAttr.array;
  const dstN = paper.normalAttr.array;
  if (t < 1e-6) {
    dstP.set(positions.subarray(off0, off0 + len));
    dstN.set(normals.subarray(off0, off0 + len));
  } else {
    const s = 1 - t;
    for (let i = 0; i < len; i++) {
      dstP[i] = positions[off0 + i] * s + positions[off1 + i] * t;
      dstN[i] = normals[off0 + i] * s + normals[off1 + i] * t;
    }
  }
  paper.positionAttr.needsUpdate = true;
  paper.normalAttr.needsUpdate = true;
  paper.mesh.geometry.computeBoundingSphere();
  paper.mesh.geometry.computeBoundingBox();
}
