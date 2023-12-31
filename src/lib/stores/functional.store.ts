import { writable } from "svelte/store";
import carList from "$lib/stores/car.store";
import type CarList from "../../routes/exercises/6/my-answer/car-list.svelte";
// export function handleRowClick(car) {
//     if (activeCarStore === car) {
//         activeCarStore = writable(null);
//     }
//     else {
//         activeCarStore = car;
//     }
// }

export function addData() {

    carList.update(cars => {
        return [
            {
                make: "",
                model: "",
                year: null,
                mileage: null,
                condition: "",
            },
            ...cars,
        ];
    });
}



export const activeCarStore = writable(null);
