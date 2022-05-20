<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  });
</script>

<script>
  import "../app.css";
  import Nav from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
  import PageTransition from "$lib/PageTransition.svelte";
  export let key;
</script>

<div
  class="bg-gray-100 dark:bg-gray-900 flex flex-col min-h-screen font-inter selection:bg-amber-300"
>
  <Nav />
  <main class="pt-16 flex-grow w-full">
    <PageTransition refresh={key}>
      <slot />
    </PageTransition>
  </main>
  <Footer class="flex-shrink-0" />
</div>
