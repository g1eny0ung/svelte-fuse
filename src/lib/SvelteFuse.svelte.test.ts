import { expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import TestComponent from './SvelteFuse.test.svelte';

test('updates the bound result when the query changes', async () => {
	const screen = render(TestComponent);

	await screen.getByLabelText('Search').fill('Jane');

	await expect.element(screen.getByText('Jane Doe')).toBeVisible();
	await expect.element(screen.getByText('John Doe')).not.toBeInTheDocument();
});
