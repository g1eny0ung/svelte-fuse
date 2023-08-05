import type Fuse from 'fuse.js';

// Reexport your entry components here
export { default } from './SvelteFuse.svelte';

export type ResultType<T> = Fuse.FuseResult<T>[];
