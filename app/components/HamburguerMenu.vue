<template>
  <div ref="menuRef" class="relative flex md:hidden z-20">
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
          class="p-2 rounded-lg transition-colors active:bg-slate-900 hover:bg-slate-900"
          @click="handleOptionClick"
        >
          {{ option.name }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { MenuOption } from "~/types/Data";
import { onClickOutside } from "@vueuse/core";

defineProps({
  menuOptions: {
    type: Array as PropType<MenuOption[]>,
    required: true,
  },
});

const isOpen = ref<boolean>(false);
const menuRef = ref<HTMLElement | null>(null);

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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
