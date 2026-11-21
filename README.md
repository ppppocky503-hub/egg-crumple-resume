# Egg Crumple · 简历

基于 [item-develop/paper-crumple-demo](https://github.com/item-develop/paper-crumple-demo) 的原版 Three.js / cannon-es / Houdini VAT 场景。保留原版的红色背景、地面、28 个对象分批落下、碰撞滚动、拖动抛掷、点击展开以及再次点击时的收起抛回路径。闭合状态改为程序生成的三维鸡蛋，展开后的纸页显示七份不同职业方向的虚构简历，循环分配给场景中的鸡蛋。

## 使用

- 点击静止的鸡蛋，沿原版 VAT 动画路径展开简历纸页。再次点击展开的纸页可收起。
- 拖动鸡蛋，松手后按原版物理规则抛掷；滚动中的鸡蛋可以接住。
- 在 `dist/src/resumes.js` 修改姓名、岗位、经历、项目、技能和教育信息。
- 原版调试参数仍可使用，例如 `?papers=1` 和 `?gui=on`。

## 本地运行

使用任意静态 HTTP 服务提供 `dist/`，例如：

```bash
npx serve dist
```

页面需要加载原版的 Three.js 和 cannon-es CDN 模块以及本地的 FBX / EXR 资源，不支持直接用 `file://` 打开。

## GitHub Pages 发布

仓库包含 `.github/workflows/pages.yml`。将源码推送到 `main` 分支后，在仓库 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**；工作流会将 `dist/` 作为网站发布。发布完成后，GitHub 会在 Pages 设置中显示可供手机访问的网址。

## 主要文件

- `dist/src/main-vat.js`：原版场景、物理和交互，附加闭合鸡蛋与展开纸页的可见度切换。
- `dist/src/egg-model.js`：鸡蛋几何体和蛋壳纹理。
- `dist/src/paper-resume.js`：将简历绘制到原版 VAT 纸页。
- `dist/src/resumes.js`：七份虚构示例简历。
- `dist/src/paper-vat.js`、`dist/vat/`：原版 VAT 解码与资产。

保留原项目的 MIT 版权声明，详见 `LICENSE`。
