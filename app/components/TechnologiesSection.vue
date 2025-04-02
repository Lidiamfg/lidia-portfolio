<template>
  <AutoScrollCarousel :items="technologies" :speed="1">
    <template #default="{ item }: { item: TechnologiesComp }">
      <component
        v-if="item.component"
        :is="item.component"
        :customClass="'h-7 mr-8 sm:mr-14 md:h-12 md:mr-24 lg:h-16'"
      />
    </template>
  </AutoScrollCarousel>
</template>

<script setup lang="ts">
import { technologies } from "~/data/Technologies";
import type { TechnologiesComp } from "~/types/Data";
</script>
