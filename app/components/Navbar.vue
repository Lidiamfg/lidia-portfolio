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

    <HamburguerMenu
      ref="menuRef"
      :is-open="isOpen"
      :handle-menu-click="handleMenuClick"
      :handle-option-click="handleOptionClick"
    />
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

const handleMenuClick = () => {
  isOpen.value = !isOpen.value;
};

const handleOptionClick = () => {
  isOpen.value = false;
};

onClickOutside(menuRef, () => {
  isOpen.value = false;
});
</script>

<style scoped>

</style>
