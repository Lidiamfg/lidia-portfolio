<template>
  <div class="relative w-full grid grid-cols-2 items-end">
    <div class="sm:w-2/3">
      <p class="mt-6 text-lg">
        {{ heroInfo.intro }}
      </p>

      <p class="mt-6 text-base text-justify whitespace-pre-line">
        {{ heroInfo.description }}
      </p>
    </div>

    <div class="justify-self-end">
      <img
        class="aspect-3/2 object-cover rounded-lg xl:w-4xl md:w-lg w-sm"
        :src="heroInfo.image"
        alt="hero image"
      />
    </div>

    <h1 class="absolute font-bold flex flex-col w-full 2xl:text-[180px] text-[140px]">
      <span class="relative -bottom-20 2xl:-bottom-16">{{ firstWordTitle }}</span>

      <span class="self-end relative -bottom-20 2xl:-bottom-24 min-[1670px]:mr-20 min-[1536px]:mr-5">
        {{ secondWordTitle }}
      </span>
    </h1>
  </div>

  <div class="flex w-full">
    <button
      class="mt-6 bg-amber-500 hover:bg-amber-600 font-bold py-3 px-6 align-start rounded-md w-[164px]"
    >
      {{ heroInfo.buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { HeroInfo } from "~/types/Data";

const props = defineProps({
  heroInfo: {
    type: Object as PropType<HeroInfo>,
    required: true,
  },
});

const firstWordTitle = computed(() => props.heroInfo.title.split(" ")[0]);
const secondWordTitle = computed(() => props.heroInfo.title.split(" ")[1]);
</script>

<style scoped></style>
