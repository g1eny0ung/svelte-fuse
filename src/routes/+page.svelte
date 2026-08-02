<script lang="ts">
	import { Check as CheckIcon, Minus as MinusIcon } from '@lucide/svelte';
	import SvelteFuse from '$lib/index.js';
	import type { ResultType } from '$lib/index.js';
	import { contacts, type Contact } from './data.js';

	let fuseOptions = $state({
		keys: ['name']
	});
	let query = $state('');
	let result = $state<ResultType<Contact>>([]);

	const handleAddKey = (key: string) => {
		if (fuseOptions.keys.includes(key)) {
			fuseOptions.keys = fuseOptions.keys.filter((candidate) => candidate !== key);
		} else {
			fuseOptions.keys = [...fuseOptions.keys, key];
		}
	};
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
					class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700"
				>
					<img src="/logo-github.svg" alt="" class="size-4" />
					<span class="hidden text-sm font-medium sm:inline-block">GitHub</span>
				</a>
			</div>
		</div>
	</header>

	<main class="space-y-6">
		<div class="flex flex-wrap justify-between gap-6">
			<div class="relative max-w-md flex-1">
				<label for="Search" class="sr-only">Search</label>
				<input
					type="text"
					id="Search"
					placeholder="Search for..."
					class="w-full rounded-md border-gray-200 py-2.5 pe-10 sm:text-sm"
					bind:value={query}
				/>
			</div>

			<span class="inline-flex overflow-scroll rounded-md border border-gray-200 bg-white">
				{#each Object.keys(contacts[0]) as key (key)}
					{#if key !== 'id'}
						<button
							class="inline-flex cursor-pointer items-center border-r border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 last:border-r-0 hover:bg-gray-50"
							class:bg-gray-100={fuseOptions.keys.includes(key)}
							onclick={() => handleAddKey(key)}
						>
							{#if fuseOptions.keys.includes(key)}
								<CheckIcon aria-hidden="true" class="mr-3 size-4" strokeWidth={1.5} />
							{:else}
								<MinusIcon aria-hidden="true" class="mr-3 size-4" strokeWidth={1.5} />
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
							<th class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">{key}</th>
						{/each}
					</tr>
				</thead>

				<tbody class="divide-y divide-gray-200">
					{#each result.length ? result.map((d) => d.item) : contacts as contact (contact.id)}
						<tr class="*:px-4 *:py-2 *:whitespace-nowrap odd:bg-gray-50">
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
