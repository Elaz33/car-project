<script lang="ts">
    import carList from "$lib/stores/car.store";
    import { activeCarStore } from "$lib/stores/functional.store";
    import { addData } from "$lib/stores/functional.store";

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
        }

        const confirmMessage = isActiveCarEmpty()
            ? "Are you sure you want to remove this new car record"
            : `Are you sure you want to remove this ${$activeCarStore.make} ${$activeCarStore.model} ${$activeCarStore.year}`;

        if (confirm(confirmMessage)) {
            $activeCarStore = null;
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
        const inp: HTMLInputElement = document.querySelector(".car-make");
        inp.focus();

        // move the focus (using svelte)
        // const inp2;
        // inp2.focus();

        // $inp.focus();
    }

    function isActiveCarEmpty(): boolean {
        return (
            $activeCarStore.make === null ||
            $activeCarStore.make === "" ||
            $activeCarStore.model === null ||
            $activeCarStore.model === "" ||
            $activeCarStore.year === null ||
            $activeCarStore.year === ""
        );
    }
</script>

<h1 class="title">Used Car Inventory Manager</h1>
<h3 class="title">A working example of CRUD in Svelte</h3>
<hr class="space" />
<div class="button-group">
    <button on:click={onAddCar} class="btn btn-success">+</button>
    {#if visible === true}
        <button on:click={removeData} class="btn btn-warning">-</button>
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
                {#if car.year !== null}
                    {car.year}
                {/if}
            </div>
            <hr class="column-line" />
            <div class="row-item">
                {#if car.mileage !== null}
                    {car.mileage}
                {/if}
            </div>
            <hr class="column-line" />
            <div class="row-item">
                {car.condition}
            </div>
        </div>
    {/each}
</div>

<style>
    :global(body) {
        background-color: #f8f8f8;
    }
    .title {
        text-align: center;
    }
    .space {
        width: 50%;
    }
    .header {
        display: flex;
        width: 50%;
        margin: auto;
    }
    .table {
        text-align: center;
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
        width: 50%;
        margin: auto;
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
        width: 50%;
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
        text-align: center;
        row-gap: 3px;
    }
    .btn {
        height: 30px;
        width: 30px;
    }
    /* I am using bootstrap */
    .btn-success {
        position: relative;
        left: 70%;
        background-color: rgb(10, 118, 82);
        color: white;
    }
       /* I am using bootstrap */
    .btn-warning {
        position: relative;
        left: 71%;
        background-color: #d61919;
        color: #ffff88;
    }
    .row.active-car {
        background-color: #7777ee;
    }
</style>
