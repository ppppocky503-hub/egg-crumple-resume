// 示例简历：全部为虚构人物，替换这里的数据即可更新每枚鸡蛋中的简历。
export const RESUMES = [
  {
    name: "林知夏", latin: "LIN ZHIXIA", role: "产品设计师", code: "DESIGN / 01", accent: "#e25b45",
    city: "上海", email: "zhixia@example.com", years: "6 年经验",
    intro: "让复杂工具变得清晰、温暖、易于使用。擅长从用户研究走到可交付的设计系统。",
    experience: [
      { title: "高级产品设计师", company: "MONO Studio", time: "2022 — 至今", detail: "主导协作平台改版，建立跨端组件体系；核心流程完成率提升 28%。" },
      { title: "交互设计师", company: "岸线科技", time: "2019 — 2022", detail: "负责企业工作台和移动端体验，推动研究、原型与可用性测试。" },
    ],
    project: "一页工作台 · 将高频操作压缩为三步，覆盖 12 万活跃用户。",
    skills: ["用户研究", "交互设计", "Figma", "设计系统", "原型验证"],
    education: "同济大学  ·  设计学学士  ·  2019",
  },
  {
    name: "陈一航", latin: "CHEN YIHANG", role: "前端工程师", code: "ENGINEERING / 02", accent: "#527fa4",
    city: "杭州", email: "yihang@example.com", years: "5 年经验",
    intro: "关注性能与细节，喜欢把复杂交互写成可靠、可维护的产品体验。",
    experience: [
      { title: "资深前端工程师", company: "拾光网络", time: "2023 — 至今", detail: "负责可视化编辑器架构，优化大画布渲染与协同编辑性能。" },
      { title: "前端工程师", company: "北辰科技", time: "2020 — 2023", detail: "建设组件库和自动化发布流程，支撑多个业务团队。" },
    ],
    project: "Flowboard · 通过虚拟化与增量更新，将首屏耗时缩短 42%。",
    skills: ["TypeScript", "React", "WebGL", "性能优化", "工程化"],
    education: "浙江大学  ·  计算机科学学士  ·  2020",
  },
  {
    name: "周予安", latin: "ZHOU YUAN", role: "数据分析师", code: "DATA / 03", accent: "#718b58",
    city: "北京", email: "yuan@example.com", years: "4 年经验",
    intro: "把零散数据变成团队能理解、能行动的洞察。重视实验设计和指标口径。",
    experience: [
      { title: "商业数据分析师", company: "见山零售", time: "2022 — 至今", detail: "搭建增长指标体系与实验平台，支持获客、留存和商品决策。" },
      { title: "数据分析师", company: "麦田咨询", time: "2021 — 2022", detail: "为消费品牌完成用户分层和渠道归因分析。" },
    ],
    project: "门店罗盘 · 统一 70+ 指标，帮助区域团队每周定位增长机会。",
    skills: ["SQL", "Python", "A/B 测试", "Tableau", "统计分析"],
    education: "中国人民大学  ·  统计学硕士  ·  2021",
  },
  {
    name: "许沐言", latin: "XU MUYAN", role: "品牌策划", code: "BRAND / 04", accent: "#b68749",
    city: "深圳", email: "muyan@example.com", years: "7 年经验",
    intro: "从品牌策略到真实触点，用有记忆点的叙事连接产品和人。",
    experience: [
      { title: "品牌策略负责人", company: "陆离创意", time: "2021 — 至今", detail: "带领团队完成新品牌定位、视觉语言和整合传播方案。" },
      { title: "品牌策划", company: "微光文化", time: "2018 — 2021", detail: "负责生活方式品牌的内容规划与年度活动。" },
    ],
    project: "城市留白 · 从零建立品牌叙事，首年自然搜索量增长 3 倍。",
    skills: ["品牌定位", "内容策略", "创意提案", "项目管理", "传播"],
    education: "武汉大学  ·  广告学学士  ·  2018",
  },
  {
    name: "沈若宁", latin: "SHEN RUONING", role: "用户研究员", code: "RESEARCH / 05", accent: "#9b6e93",
    city: "成都", email: "ruoning@example.com", years: "5 年经验",
    intro: "喜欢深入真实场景，让用户声音进入产品决策的每一个关键节点。",
    experience: [
      { title: "高级用户研究员", company: "日常实验室", time: "2022 — 至今", detail: "建立持续研究机制，覆盖访谈、日记研究与定量追踪。" },
      { title: "体验研究员", company: "云渡出行", time: "2020 — 2022", detail: "负责核心旅程研究，推动服务蓝图和产品机会落地。" },
    ],
    project: "回家之路 · 访谈 80 位用户，识别跨城出行中的三项关键断点。",
    skills: ["深度访谈", "问卷设计", "可用性测试", "服务蓝图", "洞察表达"],
    education: "四川大学  ·  心理学硕士  ·  2020",
  },
  {
    name: "顾承泽", latin: "GU CHENGZE", role: "产品经理", code: "PRODUCT / 06", accent: "#4b9290",
    city: "南京", email: "chengze@example.com", years: "6 年经验",
    intro: "擅长在业务目标、技术边界和用户需求之间找到简洁的解决方案。",
    experience: [
      { title: "高级产品经理", company: "曜石软件", time: "2022 — 至今", detail: "负责企业协作产品路线图与商业化，推动关键功能落地。" },
      { title: "产品经理", company: "简途科技", time: "2019 — 2022", detail: "从 0 到 1 构建内容管理工具，并持续迭代增长漏斗。" },
    ],
    project: "知识空间 · 上线 6 个月服务 300+ 团队，付费转化提升 19%。",
    skills: ["需求分析", "路线图", "增长实验", "B2B SaaS", "跨团队协作"],
    education: "东南大学  ·  信息管理学士  ·  2019",
  },
  {
    name: "唐乐唯", latin: "TANG LEWEI", role: "视觉设计师", code: "VISUAL / 07", accent: "#d27469",
    city: "广州", email: "lewei@example.com", years: "4 年经验",
    intro: "用大胆而克制的视觉语言，为数字产品建立鲜明、统一的表达。",
    experience: [
      { title: "视觉设计师", company: "方圆设计", time: "2022 — 至今", detail: "负责品牌数字体验、活动视觉和动态设计规范。" },
      { title: "平面设计师", company: "纸间工作室", time: "2020 — 2022", detail: "完成出版物、包装和线上传播视觉设计。" },
    ],
    project: "向光计划 · 构建横跨网页、社交媒体与线下活动的视觉系统。",
    skills: ["视觉系统", "字体排版", "动效", "插画", "Art Direction"],
    education: "广州美术学院  ·  视觉传达学士  ·  2020",
  },
];
