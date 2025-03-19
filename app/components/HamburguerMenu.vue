<template>
  <div class="relative flex md:hidden">
    <button @click="handleMenuClick">
      <IconMenuRounded class="size-10" />
    </button>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute right-0 mt-10 w-48 bg-slate-800 text-slate-100 p-4 flex flex-col gap-2 rounded-lg shadow-lg shadow-gray-950"
      >
        <a
          v-for="option in menuOptions"
          :href="option.href"
          class="p-2 rounded-lg transition-colors active:bg-slate-900"
          @click="handleOptionClick"
        >
          {{ option.name }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { menuOptions } from "../data/MenuOptions";

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  handleMenuClick: {
    type: Function as PropType<() => void>,
    required: true,
  },
  handleOptionClick: {
    type: Function as PropType<() => void>,
    required: true,
  },
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
