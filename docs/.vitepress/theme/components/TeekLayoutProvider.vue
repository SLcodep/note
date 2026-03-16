<script setup lang="ts" name="TeekLayoutProvider">
import Teek from "vitepress-theme-teek";
import ContributeChart from "./ContributeChart.vue";
import NotFound from "./404.vue";

</script>

<template>
  <div data-allow-mismatch="children">
    <Teek.Layout>
      <template #teek-archives-top-before>
        <ClientOnly>
          <ContributeChart />
        </ClientOnly>
      </template>

      <template #not-found>
        <NotFound />
      </template>
    </Teek.Layout>
  </div>
</template>

<style lang="scss">
.tk-my.is-circle-bg {
  margin-bottom: 20px;

  .tk-my__avatar.circle-rotate {
    margin-top: 200px;
  }
}
</style>
