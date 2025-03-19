<template>
  <nav class="flex flex-row justify-between items-center p-4">
    <!-- Logo / Title -->
    <NuxtLink to="/" class="flex flex-row items-center gap-2">
      <IconLogo class="size-16" />
      <span class="text-2xl">RiseWithLídia</span>
    </NuxtLink>

    <!-- Desktop Menu (Hidden on Small Screens) -->
    <ul class="hidden md:flex gap-6 text-lg">
      <a
        v-for="option in menuOptions"
        :href="option.href"
        class="hover:text-orange-400"
        @click="isOpen = false"
      >
        {{ option.name }}
      </a>
    </ul>

    <!-- Mobile Menu Button (Visible on Small Screens) -->
    <button @click="isOpen = !isOpen" class="md:hidden">
      <IconMenuRounded class="size-10" />
    </button>
  </nav>

  <!-- Mobile Dropdown Menu -->
  <div v-if="isOpen" class="md:hidden bg-blue-800 text-slate-100 p-4 flex flex-col gap-4">
    <a v-for="option in menuOptions" :href="option.href" @click="isOpen = false">
      {{ option.name }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { menuOptions } from "../data/MenuOptions";

const isOpen = ref(false);
</script>

<style scoped></style>
