import { defineComponent, computed, ref, useTemplateRef, watch, nextTick, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import * as echarts from "echarts/core";
import { HeatmapChart } from "echarts/charts";
import { CalendarComponent, TooltipComponent, VisualMapComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { u as useData, a as usePosts, f as formatDate, b as useIntersectionObserver } from "./app.js";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContributeChart",
  __ssrInlineRender: true,
  setup(__props) {
    echarts.use([HeatmapChart, CalendarComponent, TooltipComponent, VisualMapComponent, CanvasRenderer]);
    const { isDark } = useData();
    const posts = usePosts();
    const today = formatDate(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    const beforeOnYear = formatDate(new Date((/* @__PURE__ */ new Date()).getTime() - 364 * 24 * 60 * 60 * 1e3), "yyyy-MM-dd");
    const contributeList = computed(() => {
      const contributeObject = ref({});
      posts.value.sortPostsByDate.forEach((item) => {
        if (!item.date) return;
        const date = item.date.substring(0, 10);
        if (contributeObject.value[date]) contributeObject.value[date]++;
        else contributeObject.value[date] = 1;
      });
      const contributeDays = Object.keys(contributeObject.value);
      return contributeDays.map((item) => [item, contributeObject.value[item]]).reverse();
    });
    const chartRef = useTemplateRef("chartRef");
    const contributeChart = ref();
    const { create } = useIntersectionObserver(
      chartRef,
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              try {
                renderChart(contributeList.value);
              } catch (error) {
                console.error("初始化动画失败:", error);
              }
            });
          }
        });
      },
      0.1
    );
    const option = {
      tooltip: {
        formatter: function(params) {
          return `${params.value[0]} <br/> ${params.value[1]} 篇文章`;
        }
      },
      visualMap: {
        show: false,
        min: 0,
        max: 5,
        inRange: {
          color: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127", "#196127"]
        }
      },
      calendar: {
        left: "center",
        itemStyle: {
          color: "#ebedf0",
          borderWidth: 5,
          borderColor: "#fff",
          shadowBlur: 0
        },
        cellSize: [20, 20],
        range: [beforeOnYear, today],
        splitLine: true,
        dayLabel: {
          firstDay: 7,
          nameMap: "ZH",
          color: "#3c3c43"
        },
        monthLabel: {
          color: "#3c3c43"
        },
        yearLabel: {
          show: true,
          position: "right"
        },
        silent: {
          show: false
        }
      },
      series: {
        type: "heatmap",
        coordinateSystem: "calendar",
        data: []
      }
    };
    const renderChart = (data) => {
      var _a;
      option.calendar.itemStyle.borderColor = isDark.value ? "#1b1b1f" : "#fff";
      option.calendar.itemStyle.color = isDark.value ? "#787878" : "#ebedf0";
      if (contributeChart.value) echarts.dispose(contributeChart.value);
      if (chartRef.value) contributeChart.value = echarts.init(chartRef.value);
      option.series.data = data;
      (_a = contributeChart.value) == null ? void 0 : _a.setOption(option);
    };
    watch(
      contributeList,
      async (newValue) => {
        await nextTick();
        renderChart(newValue);
      },
      { flush: "post" }
    );
    watch(isDark, async () => {
      await nextTick();
      renderChart(contributeList.value);
    });
    onMounted(() => {
      if (chartRef.value) create();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contribute__chart" }, _attrs))}><div class="chart__box"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ContributeChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
