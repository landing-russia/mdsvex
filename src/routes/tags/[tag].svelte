<script context="module">
  const allPosts = import.meta.glob("../blog/**/*.{md,svx}");
  let body = [];
  for (let path in allPosts) {
    body.push(
      allPosts[path]().then(({ metadata }) => {
        return { path, metadata };
      })
    );
  }
  export const load = async ( {page} ) => {
    const posts = await Promise.all(body);
    // console.log(page.params.tag);
    const tag = page.params.tag;
    const filteredPosts = posts.filter((post) => {
      return post.metadata.tags.includes(tag);
    });
    return {
      props: {
        filteredPosts,
        tag,
      },
    };
  };
</script>

<script>
  export let filteredPosts, tag;
</script>

<h1>{tag}</h1>

<ul>
  {#each filteredPosts as { path, metadata: { title } }}
    <li>
      <a
        href={path
          .replace("./tags", "/")
          .replace(".md", "")
          .replace(".svx", "")}>{title}</a
      >
    </li>
  {/each}
</ul>
