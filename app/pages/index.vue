<template>
  <HeroSection :hero-info="heroInfo" />

  <TechnologiesSection :technologies="technologies" class="md:py-4" id="technologies" />
</template>

<script setup lang="ts">
import { heroInfo } from "~/data/Hero";
import { technologies } from "~/data/Technologies";
</script>

<style scoped></style>
