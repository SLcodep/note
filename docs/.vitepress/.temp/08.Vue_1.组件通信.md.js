import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"组件通信","description":"","frontmatter":{"title":"组件通信","date":"2025-11-21T17:24:35.000Z","permalink":"/vue/01","categories":["Vue"],"lastUpdated":true},"headers":[],"relativePath":"08.Vue/1.组件通信.md","filePath":"08.Vue/1.组件通信.md","lastUpdated":null}');
const _sfc_main = { name: "08.Vue/1.组件通信.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /08.Vue\\1.组件通信.md for this page in Markdown format</div><h1 id="组件通信" tabindex="-1">组件通信 <a class="header-anchor" href="#组件通信" aria-label="Permalink to &quot;组件通信&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("08.Vue/1.组件通信.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1_____ as default
};
