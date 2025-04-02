<template>
  <svg :class="customClass" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.179 8.98567L28 50.099L51.821 9.184V8.98334H42.56L28.14 33.754L13.7807 8.98567H4.179Z"
      fill="#41B883"
    />
    <path
      d="M13.783 8.98567L28.1377 33.7587L42.56 8.98567H33.873L28.196 18.7367L22.54 8.98334L13.783 8.98567Z"
      fill="#35495E"
    />
  </svg>
</template>

<script setup>
defineProps({
  customClass: {
    type: String,
    default: "",
  },
});
</script>
