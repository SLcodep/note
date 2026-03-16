<script setup lang="ts" name="HomeVideoBackground">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useData, withBase } from "vitepress";

const { page, site } = useData();
const isIndexHome = computed(() => page.value.relativePath === "index.md");
const heroActiveClass = "home-hero-active";
const passiveEvent = { passive: true } as const;
const videoSrc = withBase("/play.mp4");
const posterSrc = withBase("/bg4.webp");
const videoReady = ref(false);

const getHero = () => document.getElementById("home-video-hero") as HTMLElement | null;

const scrollToContent = () => {
  const next = getHero()?.nextElementSibling as HTMLElement | null;
  if (!next) return;
  next.scrollIntoView({ behavior: "smooth", block: "start" });
};

const updateHeroMode = () => {
  const hero = getHero();
  if (!hero) return;
  const threshold = hero.clientHeight - 120;
  document.documentElement.classList.toggle(heroActiveClass, window.scrollY < threshold);
};

const markVideoReady = () => {
  videoReady.value = true;
};

onMounted(() => {
  updateHeroMode();
  window.addEventListener("scroll", updateHeroMode, passiveEvent);
  window.addEventListener("resize", updateHeroMode, passiveEvent);
});

onUnmounted(() => {
  document.documentElement.classList.remove(heroActiveClass);
  window.removeEventListener("scroll", updateHeroMode);
  window.removeEventListener("resize", updateHeroMode);
});
</script>

<template>
  <section v-if="isIndexHome" id="home-video-hero" class="home-video-hero" :class="{ 'is-video-ready': videoReady }">
    <video class="home-video-hero__media" autoplay muted loop playsinline webkit-playsinline="true"
      disablePictureInPicture preload="auto" crossorigin="anonymous" :poster="posterSrc" @loadeddata="markVideoReady"
      @canplay="markVideoReady">
      <source :src="videoSrc" type="video/mp4" />
    </video>
    <div class="home-video-hero__mask"></div>
    <div class="home-video-hero__content">
      <h1 class="home-video-hero__title">{{ site.title }}</h1>
      <p class="home-video-hero__desc">做而言不如起而行</p>
      <button class="home-video-hero__enter" @click="scrollToContent">进入文章列表</button>
    </div>
    <div class="home-video-hero__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C180,110 360,8 540,40 C720,72 900,118 1080,92 C1260,66 1350,26 1440,34 L1440,120 L0,120 Z" />
      </svg>
    </div>
    <button class="home-video-hero__down" @click="scrollToContent" aria-label="向下滚动">⌄</button>
  </section>
</template>

<style scoped lang="scss">
.home-video-hero {
  position: relative;
  margin-top: calc(var(--vp-nav-height) * -1);
  padding-top: var(--vp-nav-height);
  height: calc(100vh + var(--vp-nav-height));
  min-height: 680px;
  width: 100%;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  background: #071329;
}

.home-video-hero__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.home-video-hero.is-video-ready .home-video-hero__media {
  opacity: 1;
}

.home-video-hero__mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(5, 12, 30, 0.35), rgba(5, 12, 30, 0.72));
}

.home-video-hero__content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 24px;
  text-align: center;
  color: #fff;
}

.home-video-hero__title {
  margin: 0;
  font-size: clamp(2rem, 6vw, 3.8rem);
  line-height: 1.1;
  font-weight: 700;
  text-shadow: 0 8px 40px rgba(0, 0, 0, 0.38);
}

.home-video-hero__desc {
  margin: 0;
  font-size: clamp(1rem, 2.1vw, 1.35rem);
  letter-spacing: 0.1em;
  opacity: 0.95;
}

.home-video-hero__enter {
  margin-top: 6px;
  border: none;
  border-radius: 999px;
  padding: 10px 22px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #38bdf8, #2563eb);
}

.home-video-hero__down {
  position: absolute;
  left: 50%;
  bottom: 72px;
  transform: translateX(-50%);
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  font-size: 28px;
  line-height: 1;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(3px);
  animation: hero-down-float 1.8s ease-in-out infinite;
}

.home-video-hero__wave {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 88px;
  z-index: 2;
}

.home-video-hero__wave svg {
  width: 100%;
  height: 100%;
  display: block;
}

.home-video-hero__wave path {
  fill: var(--vp-c-bg);
}

:global(.home-hero-active .VPNav),
:global(.home-hero-active .VPNavBar),
:global(.home-hero-active .VPNavBar.has-sidebar) {
  background: var(--hero-nav-bg) !important;
  border-bottom-color: var(--hero-nav-border) !important;
  box-shadow: var(--hero-nav-shadow) !important;
  backdrop-filter: var(--hero-nav-blur) !important;
}

:global(.home-hero-active .VPNavBar) {
  position: relative;
  isolation: isolate;
}

:global(.home-hero-active .VPNavBar::before) {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: var(--hero-nav-overlay);
}

:global(.home-hero-active .VPNavBar > *) {
  position: relative;
  z-index: 1;
}

:global(.home-hero-active .VPNavBar :is(.title,
    .VPNavBarMenuLink,
    .VPNavBarMenuGroup .button,
    .VPLink.link,
    .VPSwitchAppearance,
    .VPSocialLink,
    .VPNavBarExtra .item,
    .VPNavBarExtra .button,
    .VPNavBarExtra .icon)) {
  color: var(--hero-nav-text) !important;
  text-shadow: var(--hero-nav-text-shadow);
}

:global(.home-hero-active .VPNavBar .VPNavBarMenuLink.active),
:global(.home-hero-active .VPNavBar .VPLink.link.active) {
  color: var(--hero-nav-active) !important;
}

:global(.home-hero-active .VPNavBar .DocSearch-Button) {
  background: var(--hero-search-bg) !important;
  border-color: var(--hero-search-border) !important;
  color: var(--hero-nav-text) !important;
}

:global(.home-hero-active .VPNavBar .DocSearch-Button-Placeholder),
:global(.home-hero-active .VPNavBar .DocSearch-Button-Keys),
:global(.home-hero-active .VPNavBar .DocSearch-Search-Icon) {
  color: var(--hero-nav-text) !important;
}

:global(.home-hero-active .VPNavBar :is(.VPNavBarExtra svg, .VPSocialLink svg, .VPNavBarExtra .vpi)) {
  color: var(--hero-nav-text) !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}

:global(.home-hero-active .VPFlyout .menu),
:global(.home-hero-active .VPMenu) {
  background: var(--hero-menu-bg) !important;
  border: 1px solid var(--hero-menu-border) !important;
  backdrop-filter: var(--hero-menu-blur) !important;
}

:global(.home-hero-active :is(.VPFlyout, .VPMenu) :is(.title, .link, .text)) {
  color: var(--hero-nav-text) !important;
}

:global(.home-hero-active :is(.VPFlyout, .VPMenu) .link:hover) {
  background: var(--hero-menu-hover) !important;
}

:global(.home-hero-active) {
  --hero-nav-bg: rgba(10, 16, 30, 0.16);
  --hero-nav-border: rgba(255, 255, 255, 0.28);
  --hero-nav-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  --hero-nav-blur: blur(6px) saturate(125%);
  --hero-nav-overlay: linear-gradient(to bottom,
      rgba(8, 14, 28, 0.34) 0%,
      rgba(8, 14, 28, 0.2) 40%,
      rgba(8, 14, 28, 0.1) 100%);
  --hero-nav-text: #fff;
  --hero-nav-text-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  --hero-nav-active: #9fd2ff;
  --hero-search-bg: rgba(15, 25, 44, 0.4);
  --hero-search-border: rgba(255, 255, 255, 0.3);
  --hero-menu-bg: rgba(10, 18, 36, 0.72);
  --hero-menu-border: rgba(255, 255, 255, 0.24);
  --hero-menu-blur: blur(10px) saturate(125%);
  --hero-menu-hover: rgba(255, 255, 255, 0.12);
}

:global(html:not(.dark).home-hero-active) {
  --hero-nav-bg: rgba(255, 255, 255, 0.36);
  --hero-nav-border: rgba(15, 23, 42, 0.14);
  --hero-nav-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  --hero-nav-blur: blur(8px) saturate(145%);
  --hero-nav-overlay: linear-gradient(to bottom,
      rgba(255, 255, 255, 0.14) 0%,
      rgba(255, 255, 255, 0.06) 42%,
      rgba(255, 255, 255, 0.01) 100%);
  --hero-nav-text: #0f172a;
  --hero-nav-text-shadow: 0 1px 6px rgba(255, 255, 255, 0.28);
  --hero-nav-active: #2563eb;
  --hero-search-bg: rgba(255, 255, 255, 0.52);
  --hero-search-border: rgba(15, 23, 42, 0.14);
  --hero-menu-bg: rgba(255, 255, 255, 0.76);
  --hero-menu-border: rgba(15, 23, 42, 0.14);
  --hero-menu-blur: blur(10px) saturate(130%);
  --hero-menu-hover: rgba(37, 99, 235, 0.1);
}

@keyframes hero-down-float {

  0%,
  100% {
    transform: translate(-50%, 0);
  }

  50% {
    transform: translate(-50%, -7px);
  }
}

@media (max-width: 768px) {
  .home-video-hero {
    min-height: 560px;
    border-radius: 0 0 16px 16px;
  }

  .home-video-hero__down {
    bottom: 64px;
  }

  .home-video-hero__wave {
    height: 72px;
  }
}
</style>
