<template>
  <div class="w-full lg:flex lg:flex-col lg:gap-6">
    <div
      class="relative flex flex-col gap-4 items-start lg:flex-row-reverse lg:gap-8 lg:items-end lg:w-full"
    >
      <!-- Title -->
      <h1
        class="absolute z-2 hidden font-bold flex flex-col w-full text-[96px] bottom-1/2 translate-y-[45%] xl:text-[140px] xl:translate-y-[50%] 2xl:text-[180px] 2xl:translate-y-[60%] lg:flex"
      >
        <span class="self-center leading-80 xl:self-start 2xl:leading-100">{{
          firstWordTitle
        }}</span>
        <span class="self-end min-[1670px]:mr-20 min-[1536px]:mr-5">{{ secondWordTitle }}</span>
      </h1>

      <!-- Hero Image -->
      <div class="relative w-full lg:w-1/2">
        <img
          class="w-full aspect-3/2 object-cover rounded-lg xl:w-4xl lg:w-lg"
          :src="heroInfo.image"
          alt="hero image"
        />

        <!-- Mobile Title -->
        <h1
          class="lg:hidden absolute font-bold flex flex-col w-full text-5xl bottom-0 translate-y-[60%] sm:text-8xl sm:translate-y-[40%] md:text-9xl md:translate-y-[30%]"
        >
          <span class="mb-1 ml-4 lg:mb-2 lg:ml-6">{{ firstWordTitle }}</span>
          <span class="self-end min-[1670px]:mr-20 min-[1536px]:mr-5">{{ secondWordTitle }}</span>
        </h1>
      </div>

      <!-- Contact Button -->
      <button class="bg-amber-500 active:bg-amber-600 rounded-full p-2 lg:hidden">
        <IconEmail />
      </button>

      <!-- Hero Description -->
      <div class="w-full lg:w-1/2">
        <div class="xl:w-[80%] 2xl:w-[70%] lg:align-bottom flex flex-col">
          <p class="mb-2 text-lg">{{ heroInfo.intro }}</p>
          <div v-for="paragraph in heroDescriptionParagraphs" :key="paragraph">
            <p class="text-sm lg:text-sm text-justify my-2">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Button for Large Screens -->
    <button
      class="hidden lg:inline-block lg:bg-amber-500 lg:mt-6 lg:hover:bg-amber-600 lg:font-bold lg:py-3 lg:px-6 lg:rounded-md lg:w-auto lg:self-start"
    >
      <span class="hidden lg:inline-block">{{ heroInfo.buttonText }}</span>
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

const heroDescriptionParagraphs = computed(() => props.heroInfo.description.split("\n"));
const firstWordTitle = computed(() => props.heroInfo.title.split(" ")[0]);
const secondWordTitle = computed(() => props.heroInfo.title.split(" ")[1]);
</script>

<style scoped></style>
