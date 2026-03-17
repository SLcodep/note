import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"生命周期","description":"","frontmatter":{"title":"生命周期","date":"2025-11-21T17:24:35.000Z","permalink":"/vue/02","categories":["Vue"],"lastUpdated":true},"headers":[],"relativePath":"08.Vue/2.生命周期.md","filePath":"08.Vue/2.生命周期.md","lastUpdated":null}');
const _sfc_main = { name: "08.Vue/2.生命周期.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /08.Vue\\2.生命周期.md for this page in Markdown format</div><h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("08.Vue/2.生命周期.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2_____ as default
};
