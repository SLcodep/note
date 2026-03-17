// .vitepress/navConfig.ts
import type { DefaultTheme } from "vitepress";

// 定义导航配置（复用 VitePress 内置类型，保证类型提示）
export const nav: DefaultTheme.NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "前端基础",
    items: [
      { text: "JavaScript", link: "/05.前端基础/01.javascript/01.简介" },
      { text: "CSS", link: "/05.前端基础/05.CSS/01.css布局方式" },
      { text: "计算机网络", link: "/05.前端基础/15.计算机网络/01.面试合集" },
    ],
  },
  { text: "项目总结", link: "/project/AI" },
  { text: "Vue", link: "/vue/index" },
  {
    text: "索引",
    items: [
      { text: "最近更新", link: "/articleOverview" },
      { text: "分类", link: "/categories" },
      { text: "标签", link: "/tags" },
      { text: "归档", link: "/archives" },
      { text: "登录页", link: "/login" },
      {
        text: "风险链接提示页",
        link: "/risk-link?target=https://vp.teek.top",
      },
    ],
  },
];
