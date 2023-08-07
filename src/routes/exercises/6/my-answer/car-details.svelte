<script lang="ts">
    import carList from "$lib/stores/car.store";
    import { activeCarStore } from "$lib/stores/functional.store";
    import { inp } from "$lib/stores/car.store";
    import { writable } from "svelte/store";

    function updateCarListByIndex() {
        carList.update((cars) => {
            if ($activeCarStore === null) return cars; // do nothing
            //------------------------------------------------------------
            // const carIndex = cars.findIndex(car => {
            //     return car.id === $activeCarStore.id;
            // });
            /*  when I did this below it works without all the code that you did  on top  isn't 
           the way I did below much more simple */
            cars.id = $activeCarStore;
            return cars;
        });
    }

    function updateCarList() {
        carList.update((cars) => cars);
    }
</script>

<div class="container">
    {#if $activeCarStore !== null}
        <div class="input-group">
            <div class="header">Make:</div>
            <input
                class="car-info car-make"
                type="text"
                bind:value={$activeCarStore.make}
                on:keyup={updateCarList}
                on:keyup={() => console.log("keyup")}
                on:keydown={() => console.log("keydown")}
                on:keypress={() => console.log("keypress")}
            />
        </div>
        <div class="input-group">
            <div class="header">Model:</div>
            <input
                class="car-info"
                type="text"
                bind:value={$activeCarStore.model}
                on:keyup={updateCarList}
            />
        </div>
        <div class="input-group">
            <div class="header">Year:</div>
            <input
                class="car-info"
                type="number"
                bind:value={$activeCarStore.year}
                on:keyup={updateCarList}
            />
        </div>
        <div class="input-group">
            <div class="header">Mileage:</div>
            <input
                class="car-info"
                type="number"
                bind:value={$activeCarStore.mileage}
                on:keyup={updateCarList}
            />
        </div>
        <div class="input-group">
            <div class="header">Condition:</div>
            <input
                class="car-info"
                type="text"
                bind:value={$activeCarStore.condition}
                on:keyup={updateCarList}
            />
        </div>
    {/if}
</div>

<style>
    .container {
        display: flex;
        width: 18%;
        flex-direction: column;
        row-gap: 10px;
    }
    .input-group {
        display: flex;
        position: relative;
        left: 0px;
    }
    .car-info {
        position: relative;
        flex: 3;
        left: 3%;
    }

    .header {
        position: relative;
        flex: 1;
        text-align: right;
    }
</style>
