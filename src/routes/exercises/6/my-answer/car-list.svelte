<script lang="ts">
    import carList from "$lib/stores/car.store";
    import {handleClick} from "$lib/stores/functional.store";
    // import changeData from  "$lib/stores/car.store";

    function changeData() {
    carList.update(cars => {
        return [
            ...cars,
            {
                make: "toyota",
                model: "camry",
                year: "2015",
                mileage: 100000,
                condition: "fair"
            }
        ]
    })
}
</script>
<button onclick ="{changeData}" class="add">add a car</button>
<div class="header">
    <div class="header-item">Make</div>
    <div class="header-item">Model</div>
    <div class="header-item">Year</div>
    <div class="header-item">Milage</div>
    <div class="header-item">Condition</div>
</div>

<div  class="table">
    {#each $carList as car}
        <div on:click={handleClick}  class="row">
         
            <div class="row-item">{car.make}</div>
            <hr class="column-line" />
            <div class="row-item">{car.model}</div>
            <hr class="column-line" />
            <div class="row-item">{car.year}</div>
            <hr class="column-line" />
            <div class="row-item">{car.mileage}</div>
            <hr class="column-line" />
            <div class="row-item">{car.condition}</div>
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
    .row:active {
        background-color: #7777ee;
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
    .add{
      position: relative;
      left: 70%;
    }
</style>
