import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"项目","description":"","frontmatter":{"title":"项目","date":"2025-11-21T17:24:35.000Z","permalink":"/project/AI","categories":["project"],"lastUpdated":true},"headers":[],"relativePath":"10.项目总结/01.AI问答项目.md","filePath":"10.项目总结/01.AI问答项目.md","lastUpdated":null}');
const _sfc_main = { name: "10.项目总结/01.AI问答项目.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /10.项目总结\\01.AI问答项目.md for this page in Markdown format</div><h1 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-label="Permalink to &quot;项目&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("10.项目总结/01.AI问答项目.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_AI____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01_AI____ as default
};
