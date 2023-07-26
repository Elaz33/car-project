import { writable } from "svelte/store";
import carList from "$lib/stores/car.store";
let row

export function handleClick(e: Event) {
    row = e.target;

    console.log(row);
}

export const activeCarStore = writable(null);