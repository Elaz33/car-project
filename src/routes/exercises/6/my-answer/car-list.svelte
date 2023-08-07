<script lang="ts">
    import carList from "$lib/stores/car.store";
    import { activeCarStore } from "$lib/stores/functional.store";
    import { addData } from "$lib/stores/functional.store";
    import { inp } from "$lib/stores/car.store";

    let visible = false;
    function handleRowClick(car) {
        if ($activeCarStore === car) {
            $activeCarStore = null;
            visible = !visible;
        } else {
            $activeCarStore = car;
            visible = true;
        }
    }
    let car: any;
    function removeData() {
        if ($activeCarStore !== null) {
            car = $carList.findIndex((carIndex) => {
                return carIndex === $activeCarStore;
            });
            console.log(car);
        }
        if (
            confirm(
                "are you sure you want to remove this" +
                    " " +
                    $activeCarStore.make +
                    " " +
                    $activeCarStore.model +
                    " " +
                    $activeCarStore.year
            ) === true
        ) {
            $activeCarStore = null;
            console.log(car);
            $carList.splice(car, 1);
            carList.update((cars) => cars);
        } else {
            return $carList;
        }
    }

    function onAddCar() {
        addData();

        // select new row (make it the active car)
        $activeCarStore = $carList[0];

        // move the focus (using vanilla javascript)
        // const inp: HTMLInputElement = document.querySelector(".car-make");
        // inp.focus();

        // move the focus (using svelte)
        // const inp2;
        // inp2.focus();

        // $inp.focus();
    }
</script>

<div class="button-group">
    <button on:click={onAddCar} class="add">add a car</button>
    {#if visible === true}
        <button on:click={removeData} class="delete">Remove this car</button>
    {/if}
</div>
<div class="header">
    <div class="header-item">Make</div>
    <div class="header-item">Model</div>
    <div class="header-item">Year</div>
    <div class="header-item">Mileage</div>
    <div class="header-item">Condition</div>
</div>

<div class="table">
    {#each $carList as car}
        <div
            class="row"
            class:active-car={$activeCarStore === car}
            on:click={() => handleRowClick(car)}
        >
            <div class="row-item">
                {car.make}
            </div>
            <hr class="column-line" />
            <div class="row-item">
                {car.model}
            </div>
            <hr class="column-line" />
            <div class="row-item">
                {car.year}
            </div>
            <hr class="column-line" />
            <div class="row-item">
                {car.mileage}
            </div>
            <hr class="column-line" />
            <div class="row-item">
                {car.condition}
            </div>
        </div>
    {/each}
</div>

<style>
    .header {
        display: flex;
        width: 75%;
    }

    .header-item {
        width: 75%;
        text-align: center;
        flex: 1;
        padding: 15px;
        font-size: larger;
    }
    .row {
        display: flex;
        flex: 1;
        width: 75%;
        justify-content: center;
    }
    .row:nth-of-type(odd) {
        background-color: #f1f1f1;
    }
    .row:nth-of-type(even) {
        background-color: #d1d1d1;
    }
    .row:hover {
        background-color: #aaaaff;
        color: #fff;
        cursor: pointer;
    }

    .row-item {
        display: flex;
        flex: 1;
        width: 75%;
        justify-content: center;
        padding: 15px;
    }
    .column-line {
        border: solid black 1px;
        padding: 0px;
        margin: 0px;
    }
    .button-group {
        display: flex;
        position: relative;
        flex-direction: column;
        left: 65%;
        row-gap: 3px;
    }
    .add {
        width: 150px;
        background-color: aquamarine;
        color: #aaaaff;
    }
    .delete {
        width: 150px;
        background-color: #990000;
        color: #ffff88;
    }
    .row.active-car {
        background-color: #7777ee;
    }
</style>
