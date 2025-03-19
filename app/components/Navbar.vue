<template>
  <nav class="flex items-center justify-between relative">
    <ul class="hidden md:flex gap-6 text-xl">
      <li v-for="option in leftMenu" :key="option.name">
        <a :href="option.href" class="hover:text-orange-400">
          {{ option.name }}
        </a>
      </li>
    </ul>

    <NuxtLink
      to="/"
      class="flex flex-row items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2"
    >
      <IconLogo class="size-10" />
      <span class="text-2xl md:text-4xl">RiseWithLídia</span>
    </NuxtLink>

    <ul class="hidden md:flex gap-6 text-xl">
      <li v-for="option in rightMenu" :key="option.name">
        <a :href="option.href" class="hover:text-orange-400">
          {{ option.name }}
        </a>
      </li>
    </ul>

    <div class="relative md:hidden" ref="menuRef">
      <button @click="isOpen = !isOpen">
        <IconMenuRounded class="size-10" />
      </button>

      <transition name="fade">
        <div
          v-if="isOpen"
          class="absolute right-0 mt-2 w-48 bg-slate-800 text-slate-100 p-4 flex flex-col gap-2 rounded-lg shadow-lg shadow-gray-950"
        >
          <a
            v-for="option in menuOptions"
            :href="option.href"
            class="p-2 rounded-lg transition-colors active:bg-slate-900"
            @click="isOpen = false"
          >
            {{ option.name }}
          </a>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { menuOptions } from "../data/MenuOptions";
import { onClickOutside } from "@vueuse/core";

const isOpen = ref<boolean>(false);
const menuRef = ref<HTMLElement | null>(null);

const middleIndex = computed(() => Math.ceil(menuOptions.length / 2));
const leftMenu = computed(() => menuOptions.slice(0, middleIndex.value));
const rightMenu = computed(() => menuOptions.slice(middleIndex.value));

onClickOutside(menuRef, () => {
  isOpen.value = false;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
