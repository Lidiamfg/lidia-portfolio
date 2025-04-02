<template>
  <div class="container relative mx-auto max-w-1/1 p-6 md:p-12">
    <header class="fixed top-0 right-0 left-0 p-6 md:px-12 z-10 bg-slate-900">
      <Navbar />
    </header>

    <main class="mt-18 md:mt-23 flex flex-col gap-8 items-center">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "RiseWithLídia",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
    },
  ],
  bodyAttrs: {
    class: "bg-slate-900 text-slate-100",
  },
});
</script>

<style>
body {
  font-family: "Inria Sans", sans-serif;
}
</style>
