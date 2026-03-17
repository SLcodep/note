import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"permalink":"/risk-link","layout":false,"riskLinkPage":true,"logo":"/teek-logo-large.png","article":false},"headers":[],"relativePath":"@pages/riskLinkPage.md","filePath":"@pages/riskLinkPage.md","lastUpdated":1773574537000}');
const _sfc_main = { name: "@pages/riskLinkPage.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /@pages\\riskLinkPage.md for this page in Markdown format</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("@pages/riskLinkPage.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const riskLinkPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  riskLinkPage as default
};
