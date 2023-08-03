<script lang="ts">
    import CarList from "./car-list.svelte";
    import carList from "$lib/stores/car.store";
    import { activeCarStore } from "$lib/stores/functional.store";
</script>

<div class="container">
    {#if $activeCarStore !== null}
        <div class="input-group">
            <div class="header">Make:</div>
            <input class="car-info" type="text" value={$activeCarStore.make} />
        </div>
        <div class="input-group">
            <div class="header">Model:</div>
            <input class="car-info" type="text" value={$activeCarStore.model} />
        </div>
        <div class="input-group">
            <div class="header">Year:</div>
            <input
                class="car-info"
                type="number"
                value={$activeCarStore.year}
            />
        </div>
        <div class="input-group">
            <div class="header">Mileage:</div>
            <input
                class="car-info"
                type="number"
                value={$activeCarStore.mileage}
            />
        </div>
        <div class="input-group">
            <div class="header">Condition:</div>
            <input
                class="car-info"
                type="text"
                value={$activeCarStore.condition}
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
