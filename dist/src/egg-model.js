import * as THREE from "three";

// The VAT page remains the opened résumé. This mesh replaces its crumpled pose.
const textureCanvas = document.createElement("canvas");
textureCanvas.width = 512;
textureCanvas.height = 256;
const ctx = textureCanvas.getContext("2d");
ctx.fillStyle = "#ebe0c9";
ctx.fillRect(0, 0, 512, 256);

let seed = 14719;
function random() {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 4294967296;
}
for (let i = 0; i < 7500; i++) {
  const x = random() * 512;
  const y = random() * 256;
  const size = random() < 0.95 ? random() * 1.2 + 0.2 : random() * 2.8 + 0.8;
  ctx.fillStyle = random() < 0.78
    ? `rgba(139, 103, 69, ${random() * 0.16 + 0.035})`
    : `rgba(255, 255, 245, ${random() * 0.25 + 0.06})`;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}
const texture = new THREE.CanvasTexture(textureCanvas);
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapS = THREE.RepeatWrapping;
texture.anisotropy = 8;

const shellMaterial = new THREE.MeshPhysicalMaterial({
  map: texture,
  color: "#fff9ee",
  roughness: 0.82,
  metalness: 0,
  clearcoat: 0.07,
  clearcoatRoughness: 0.9,
});

export function createEggModel(radius, center, index) {
  const geometry = new THREE.SphereGeometry(1, 40, 28);
  const positions = geometry.getAttribute("position");
  const variation = 1 + (index % 5 - 2) * 0.016;
  for (let i = 0; i < positions.count; i++) {
    const y = positions.getY(i);
    const taper = 1 - 0.18 * y;
    positions.setXYZ(
      i,
      positions.getX(i) * radius * taper * variation,
      center.y + radius * (0.2 + 1.2 * y) * variation,
      positions.getZ(i) * radius * taper * 0.94 * variation,
    );
  }
  positions.needsUpdate = true;
  geometry.computeVertexNormals();
  const egg = new THREE.Mesh(geometry, shellMaterial.clone());
  egg.material.color.offsetHSL(0, 0, (index % 7 - 3) * 0.008);
  egg.castShadow = true;
  egg.receiveShadow = true;
  return egg;
}
