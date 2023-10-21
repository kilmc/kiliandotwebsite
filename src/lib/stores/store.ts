import { writable } from 'svelte/store';

export const inScale = writable<string[]>([]);
export const outScale = writable<string[]>([]);
