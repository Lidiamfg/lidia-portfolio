<template>
  <div ref="emblaRef" class="w-full overflow-hidden embla__viewport">
    <div class="embla__container h-7 md:h-26">
      <div v-for="tech in technologies" :key="tech.name" class="embla__slide">
        <component :is="tech.component" customClass="h-7 mr-8 md:h-26 md:mr-24" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import AutoScroll from "embla-carousel-auto-scroll";
import { technologies } from "~/data/Technologies";

const options = {
  loop: true,
};

const [emblaRef, emblaApi] = emblaCarouselVue(options, [
  AutoScroll({
    speed: 1,
    startDelay: 0,
    stopOnInteraction: false,
    direction: "forward",
    playOnInit: true,
  }),
]);

watch(emblaApi, (api) => {
  console.log("Loop enabled?", options.loop);
  const autoScrollPlugin = api?.plugins()?.autoScroll;
  if (autoScrollPlugin) {
    autoScrollPlugin.play();
    console.log("AutoScroll isPlaying:", autoScrollPlugin.isPlaying());
  }
});
</script>

<style scoped>
.embla__viewport {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 auto;
}
</style>
