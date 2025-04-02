<template>
  <div ref="emblaRef" class="w-screen md:w-[calc(100vw-18px)] overflow-hidden">
    <div class="flex w-full h-7 md:h-26">
      <div v-for="(item, index) in duplicatedItems" :key="index" class="flex items-center">
        <slot :item="item" :index="index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import AutoScroll from "embla-carousel-auto-scroll";
import type { CarouselSlots } from "~/types/Carrousel";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  speed: {
    type: Number,
    required: false,
    default: 1,
  },
});

defineSlots<CarouselSlots<any>>();

const duplicatedItems = computed(() => [...props.items, ...props.items]);

const options = {
  loop: true,
};

const [emblaRef, emblaApi] = emblaCarouselVue(options, [
  AutoScroll({
    speed: props.speed ?? 1,
    startDelay: 0,
    stopOnInteraction: false,
    direction: "forward",
    playOnInit: true,
  }),
]);

watch(emblaApi, (api) => {
  const autoScrollPlugin = api?.plugins()?.autoScroll;
  autoScrollPlugin?.play();
});
</script>
