import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"计算机网络面试合集","description":"","frontmatter":{"title":"计算机网络面试合集","date":"2025-11-21T17:24:35.000Z","permalink":"/nwtwork/01","categories":["css"],"tags":["css"],"lastUpdated":true},"headers":[],"relativePath":"05.前端基础/15.计算机网络/01.面试合集.md","filePath":"05.前端基础/15.计算机网络/01.面试合集.md","lastUpdated":1773574537000}');
const _sfc_main = { name: "05.前端基础/15.计算机网络/01.面试合集.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /05.前端基础\\15.计算机网络\\01.面试合集.md for this page in Markdown format</div><h1 id="计算机网络面试合集" tabindex="-1">计算机网络面试合集 <a class="header-anchor" href="#计算机网络面试合集" aria-label="Permalink to &quot;计算机网络面试合集&quot;">​</a></h1><h2 id="tcp的三次握手和四次挥手" tabindex="-1">TCP的三次握手和四次挥手 <a class="header-anchor" href="#tcp的三次握手和四次挥手" aria-label="Permalink to &quot;TCP的三次握手和四次挥手&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">面试问答</p><p>TCP三次握手和四次挥手是保障TCP连接的核心机制:</p><ul><li>三次握手</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05.前端基础/15.计算机网络/01.面试合集.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01_____ as default
};
