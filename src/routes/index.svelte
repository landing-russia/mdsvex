<script>
  import gsap from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    const tl = gsap.timeline();

    tl.from(".box", {
      y: 20,
      autoAlpha: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
      delay: 0.25,
    });
  });
</script>

<div class="container-fluid">
  <h1 class="box invisible text-4xl font-bold text-gray-800 dark:text-gray-100">
    Welcome to SvelteKit
  </h1>
  <p class="text-gray-500 font-medium">
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
</div>

<div class="h-96" />
<div class="h-96" />
<div class="h-96" />
<div class="h-96" />
<div class="h-96" />
