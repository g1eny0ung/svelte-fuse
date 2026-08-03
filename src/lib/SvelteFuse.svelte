<script lang="ts" generics="T">
  import Fuse from 'fuse.js';

  type Props = {
    list: ReadonlyArray<T>;
    options: Fuse.IFuseOptions<T>;
    query: string;
    result: Fuse.FuseResult<T>[];
  };

  // eslint-disable-next-line no-useless-assignment -- result is a bindable output prop
  let { list, options, query = $bindable(), result = $bindable() }: Props = $props();

  let fuse = $derived(new Fuse(list, options));

  $effect(() => {
    result = fuse.search(query);
  });
</script>
