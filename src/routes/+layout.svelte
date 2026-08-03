<script lang="ts">
  import './layout.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Svelte Fuse</title>
</svelte:head>

{@render children()}
