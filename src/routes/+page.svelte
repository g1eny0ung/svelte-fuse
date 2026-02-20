<script lang="ts">
  import SvelteFuse from '$lib'
  import type { ResultType } from '$lib'

  type Contact = {
    id: number
    name: string
    email: string
    phone: string
    address: string
    birthday: string
  }

  const contacts: Contact[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      address: '123 Main Street, Anytown, CA 12345',
      birthday: '1980-01-01',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phone: '456-789-0123',
      address: '456 Elm Street, Anytown, CA 12345',
      birthday: '1981-02-02',
    },
    {
      id: 3,
      name: 'Mary Smith',
      email: 'marysmith@example.com',
      phone: '789-012-3456',
      address: '789 Oak Street, Anytown, CA 12345',
      birthday: '1982-03-03',
    },
    {
      id: 4,
      name: 'Peter Jones',
      email: 'peterjones@example.com',
      phone: '012-345-6789',
      address: '012 Pine Street, Anytown, CA 12345',
      birthday: '1983-04-04',
    },
    {
      id: 5,
      name: 'Susan Brown',
      email: 'susanbrown@example.com',
      phone: '567-890-1234',
      address: '567 Maple Street, Anytown, CA 12345',
      birthday: '1984-05-05',
    },
    {
      id: 6,
      name: 'Michael Green',
      email: 'michaelgreen@example.com',
      phone: '901-234-5678',
      address: '901 Elm Street, Anytown, CA 12345',
      birthday: '1985-06-06',
    },
    {
      id: 7,
      name: 'Sarah White',
      email: 'sarahwhite@example.com',
      phone: '234-567-9012',
      address: '234 Pine Street, Anytown, CA 12345',
      birthday: '1986-07-07',
    },
    {
      id: 8,
      name: 'David Blue',
      email: 'davidblue@example.com',
      phone: '678-901-2345',
      address: '678 Maple Street, Anytown, CA 12345',
      birthday: '1987-08-08',
    },
    {
      id: 9,
      name: 'Elizabeth Red',
      email: 'elizabethred@example.com',
      phone: '345-678-9012',
      address: '345 Elm Street, Anytown, CA 12345',
      birthday: '1988-09-09',
    },
    {
      id: 10,
      name: 'Charles Black',
      email: 'charlesblack@example.com',
      phone: '890-123-4567',
      address: '890 Pine Street, Anytown, CA 12345',
      birthday: '1989-10-10',
    },
  ]

  let fuseOptions = {
    keys: ['name'],
  }
  let query = ''
  let result: ResultType<Contact> = []

  const handleAddKey = (key: string) => {
    if (fuseOptions.keys.includes(key)) {
      fuseOptions.keys = fuseOptions.keys.filter((k) => k !== key)
    } else {
      fuseOptions.keys = [...fuseOptions.keys, key]
    }
  }
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <header>
    <div class="py-8 sm:py-12">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Svelte Fuse</h1>

          <p class="mt-1.5 text-sm text-gray-500">Svelte wrapper for Fuse.js.</p>
        </div>

        <a
          href="https://github.com/g1eny0ung/svelte-fuse"
          class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <ion-icon name="logo-github"></ion-icon>
          <span class="text-sm font-medium hidden sm:inline-block">GitHub</span>
        </a>
      </div>
    </div>
  </header>

  <main class="space-y-6">
    <div class="flex justify-between flex-wrap gap-6">
      <div class="flex-1 relative max-w-md">
        <label for="Search" class="sr-only"> Search </label>

        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          bind:value={query}
        />

        <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" class="text-gray-600 hover:text-gray-700">
            <span class="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>

      <span class="inline-flex overflow-scroll rounded-md border bg-white shadow-sm">
        {#each Object.keys(contacts[0]) as key (key)}
          {#if key !== 'id'}
            <button
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border-r last:border-r-0"
              class:bg-gray-100={fuseOptions.keys.includes(key)}
              on:click={() => handleAddKey(key)}
            >
              {#if fuseOptions.keys.includes(key)}
                <ion-icon name="checkmark-outline" class="mr-3 text-lg"></ion-icon>
              {:else}
                <ion-icon name="remove-outline" class="mr-3 text-lg"></ion-icon>
              {/if}
              {key}
            </button>
          {/if}
        {/each}
      </span>
    </div>

    <div class="overflow-x-auto rounded-lg border border-gray-200">
      <SvelteFuse list={contacts} options={fuseOptions} bind:query bind:result />

      <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead class="ltr:text-left rtl:text-right">
          <tr>
            {#each Object.keys(contacts[0]) as key (key)}
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{key}</th>
            {/each}
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          {#each result.length ? result.map((d) => d.item) : contacts as contact (contact.id)}
            <tr class="odd:bg-gray-50 *:whitespace-nowrap *:px-4 *:py-2">
              <td class="font-medium text-gray-900">{contact.id}</td>
              <td class="text-gray-700">{contact.name}</td>
              <td class="text-gray-700">{contact.email}</td>
              <td class="text-gray-700">{contact.phone}</td>
              <td class="text-gray-700">
                {contact.address}
              </td>
              <td class="text-gray-700">
                {contact.birthday}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </main>
</div>
