import { writable } from "svelte/store";

let row

export function handleClick(e: Event) {
    row = e.target;

    console.log(row);
}

export const activeCarStore = writable(null);