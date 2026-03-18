import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";
import type { DefaultTheme } from "vitepress";

const withCollapsibleSidebar = (
  items: DefaultTheme.SidebarItem[],
): DefaultTheme.SidebarItem[] => {
  return items.map((item) => {
    if (!item.items?.length) return item;

    return {
      ...item,
      collapsed: item.collapsed ?? true,
      items: withCollapsibleSidebar(item.items),
    };
  });
};

export const teekConfig = defineTeekConfig({
  teekHome: true,
  vpHome: false,
  sidebarTrigger: true,
  author: { name: "SLcodep", link: "https://github.com/SLcodep/slcodep" },
  blogger: {
    name: "二丫讲梵",
    slogan: "行者常至，为者常成",
    avatar: "/bg4.webp",
    shape: "square",
  },
  social: [
    {
      name: "GitHub",
      icon: "ri:github-fill",
      iconType: "iconify",
      link: "https://github.com/SLcodep/slcodep",
    },
    {
      name: "邮箱",
      icon: "ri:mail-fill",
      iconType: "iconify",
    },
    { name: "RSS", icon: "ri:rss-fill", iconType: "iconify" },
  ],
  banner: {
    enabled: false,
    name: "前端那些儿事",
    bgStyle: "pure",
    pureBgColor: "transparent",
    textColor: "#ffffff",
    description: [
      "大千世界，何其茫茫。谨此笔记，记录过往。",
      "凭君阅览，小站洛荒。如能收益，莫大奢望。",
    ],
    descStyle: "switch",
    switchTime: 4500,
    switchShuffle: false,
    features: [
      {
        title: "最近更新",
        details: "按时间查看最新发布与更新文章",
        link: "/articleOverview",
      },
      {
        title: "文章分类",
        details: "快速按分类浏览内容体系",
        link: "/categories",
      },
      { title: "文章标签", details: "通过标签定位同类主题", link: "/tags" },
      { title: "归档", details: "按时间线浏览所有文章", link: "/archives" },
    ],
  },
  post: {
    postStyle: "list",
    showMore: false,
    moreLabel: "查看更多文章 >",
    showCapture: false,
    splitSeparator: true,
    transition: true,
  },
  articleAnalyze: {
    showAuthor: false,
    showCreateDate: ["post"],
    showCategory: ["post"],
    showTag: false,
  },
  page: {
    pageSize: 8,
    pagerCount: 7,
  },
  category: {
    enabled: true,
    path: "/categories",
    homeTitle: "📂 文章分类",
    pageTitle: "📂 全部分类",
    moreLabel: "更多 ...",
    limit: 8,
  },
  tag: {
    enabled: true,
    path: "/tags",
    homeTitle: "🏷 热门标签",
    pageTitle: "🏷 全部标签",
    moreLabel: "更多 ...",
    limit: 24,
  },
  homeCardSort: [
    "category",
    "tag",
    "docAnalysis",
    "topArticle",
    "friendLink",
  ],
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  articleShare: { enabled: true },
  articleUpdate: {
    enabled: true,
    limit: 6,
  },
  footerInfo: {
    message: `Powered by VitePress & Teek v${version}`,
  },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      sidebarItemsResolved: (items) => withCollapsibleSidebar(items),
    },
  },
});
