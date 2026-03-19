import Teek from "vitepress-theme-teek";
import CollapsibleToc from "./components/CollapsibleToc.vue";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";

import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-table.css";
import "vitepress-theme-teek/theme-chalk/tk-mark.css";
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css";
import "vitepress-theme-teek/theme-chalk/tk-home-card-hover.css";
import "vitepress-theme-teek/theme-chalk/tk-fade-up-animation.css";

import "./styles/code-bg.scss";
import "./styles/iframe.scss";
import "./styles/reference-fonts.scss";
import "./styles/page-surface.scss";
import "./styles/article-typography.scss";
import "./styles/code-block-theme.scss";

export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
  enhanceApp({ app }: { app: any }) {
    app.component("CollapsibleToc", CollapsibleToc);
  },
};
