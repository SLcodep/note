<script setup lang="ts" name="TeekLayoutProvider">
import { computed, defineAsyncComponent } from "vue";
import { useData } from "vitepress";
import Teek from "vitepress-theme-teek";
import NotFound from "./404.vue";
import HomeVideoBackground from "./HomeVideoBackground.vue";

const { page } = useData();
const isArchivesPage = computed(() => page.value.relativePath === "@pages/archivesPage.md");
const AsyncContributeChart = defineAsyncComponent(() => import("./ContributeChart.vue"));

</script>

<template>
  <ClientOnly>
    <div data-allow-mismatch>
      <Teek.Layout>
        <template #teek-home-before>
          <HomeVideoBackground />
        </template>

        <template #teek-archives-top-before>
          <AsyncContributeChart v-if="isArchivesPage" />
        </template>

        <template #not-found>
          <NotFound />
        </template>
      </Teek.Layout>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
.tk-my.is-circle-bg {
  margin-bottom: 20px;

  .tk-my__avatar.circle-rotate {
    margin-top: 200px;
  }
}
</style>
