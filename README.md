# Svelte Fuse

Svelte wrapper for [Fuse.js](https://fusejs.io/).

## Installation

### NPM

```bash
npm install --save-dev svelte-fuse
```

### Yarn

```bash
yarn add svelte-fuse -D
```

### PNPM

```bash
pnpm add svelte-fuse -D
```

## Usage

### Live demo

You can view the [demo](https://svelte-fuse.vercel.app/) and its [source code](https://github.com/g1eny0ung/svelte-fuse/blob/main/src/routes/%2Bpage.svelte) for a working example.

### Snippet

```svelte
<script lang="ts">
  import SvelteFuse from 'svelte-fuse';
  import type { ResultType } from 'svelte-fuse';

  type Contact = {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
  };

  const contacts: Contact[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      address: '123 Main Street, Anytown, CA 12345',
      birthday: '1980-01-01'
    }
    // ...
  ];

  let fuseOptions = {
    keys: ['name']
  };
  let query = '';
  let result: ResultType<Contact> = [];
</script>

<SvelteFuse list={contacts} options={fuseOptions} bind:query bind:result />
```

### Props

| Name    | Type                     | Description                  |
| ------- | ------------------------ | ---------------------------- |
| list    | `ReadonlyArray<T>`       | The list of items to search. |
| options | `Fuse.IFuseOptions<any>` | The Fuse.js options.         |
| query   | `string`                 | The search query.            |
| result  | `ResultType<T>`          | The search result.           |

## How to contribute

If you have any ideas on how to improve this project, feel free to contribute. To do so, you can either open an issue or a pull request.

This project was developed with `@sveltejs/package`. Please read <https://kit.svelte.dev/docs/packaging> first if you want to change the source code.

## License

Under the [MIT License](License).
