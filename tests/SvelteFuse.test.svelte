<script lang="ts">
  import SvelteFuse from '$lib/SvelteFuse.svelte';
  import type { ResultType } from '$lib/index.js';

  type Contact = {
    name: string;
  };

  const contacts: Contact[] = [{ name: 'John Doe' }, { name: 'Jane Doe' }];
  const options = { keys: ['name'] };

  let query = $state('');
  let result = $state<ResultType<Contact>>([]);
</script>

<label>
  Search
  <input bind:value={query} />
</label>

<SvelteFuse list={contacts} {options} bind:query bind:result />

<ul>
  {#each result as match (match.refIndex)}
    <li>{match.item.name}</li>
  {/each}
</ul>
