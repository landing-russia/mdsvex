<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let scrollNow = 0;
  let isOpen = false;
  let isNav = true;
  let isDark = "";

  onMount(() => {
    window.onscroll = () => {
      if (window.scrollY > scrollNow) {
        isNav = false;
      } else {
        isNav = true;
      }
      scrollNow = window.scrollY;
    };
  });

  if (typeof localStorage !== "undefined") {
    if (
      localStorage.theme === "dark" 
      // ||
      // (!("theme" in localStorage) &&
      //   window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      isDark = "dark";
      document.documentElement.classList.add("dark");
    } else {
      isDark = "light";
      document.documentElement.classList.remove("dark");
    }
  }

  function isNavEsc(e) {
    if (e.code === "Escape") {
      isOpen = false;
    }
  }

  function toggleDarkMode() {
    if (isDark === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      isDark = "light";
    } else if (isDark === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      isDark = "dark";
    }
  }
</script>

<svelte:window on:keydown={isNavEsc} />

<div
  class="fixed w-full bg-white shadow transform ease-in-out transition-all duration-200 {isNav
    ? 'translate-y-0'
    : '-translate-y-full'} z-40"
>
  <nav class="container-fluid flex justify-between items-center h-16">
    <div class="flex items-center">
      <a href="/" class="py-4 text-xl font-extrabold text-amber-500"
        ><span class="text-gray-800">B</span>RAND</a
      >
      <button
        type="button"
        class="ml-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
        on:click={() => (isOpen = !isOpen)}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-amber-500 hover:text-amber-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg></button
      >
    </div>
    <div class="flex items-center space-x-3">
      <a
        href="/"
        class="py-4 px-2 text-lg font-medium text-gray-500 hover:text-gray-800 transition duration-200"
        >Home</a
      >
      <a
        href="/about"
        class="py-4 px-2 text-lg font-medium text-gray-500 hover:text-gray-800 transition duration-200"
        >About</a
      >
      {#if isDark === "dark"}
        <button
          type="button"
          class="ml-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
          on:click={toggleDarkMode}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-amber-500 hover:text-amber-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg></button
        >
      {:else if isDark === "light"}
        <button
          type="button"
          class="ml-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
          on:click={toggleDarkMode}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-amber-500 hover:text-amber-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg></button
        >
      {/if}
    </div>
  </nav>
</div>

{#if isOpen}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 bg-white/75 dark:bg-gray-700/75 z-30"
    aria-hidden="true"
    on:click={() => (isOpen = false)}
  />
{/if}

<aside
  class="transform top-0 left-0 w-64 bg-white dark:bg-gray-900 fixed h-full p-6 shadow-lg overflow-auto ease-in-out transition-all duration-200 z-50 {isOpen
    ? 'translate-x-0'
    : '-translate-x-full'}"
>
  <div class="text-gray-700 dark:text-gray-200">Menu</div>
</aside>
