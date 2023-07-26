<script lang="ts">
    import carList from "$lib/stores/car.store";
    import {activeCarStore} from "$lib/stores/functional.store";
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
        <div  class="row"  >
            <div class:active-car={$activeCarStore === car.make} on:click={()=> {$activeCarStore= car.make} } class="row-item">{car.make}</div>
            <hr class="column-line" />
            <div class:active-car={$activeCarStore === car.model} on:click={()=> {$activeCarStore= car.model} } class="row-item">{car.model}</div>
            <hr class="column-line" />
            <div class:active-car={$activeCarStore === car.year} on:click={()=> {$activeCarStore= car.year} } class="row-item">{car.year}</div>
            <hr class="column-line" />
            <div class:active-car={$activeCarStore === car.mileage} on:click={()=> {$activeCarStore = car.mileage} } class="row-item">{car.mileage}</div>
            <hr class="column-line" />
            <div class:active-car={$activeCarStore === car.condition} on:click={()=> {$activeCarStore= car.condition} } class="row-item">{car.condition}</div>
        </div>
    {/each}
</div>

<div class="active-box-id">
  activeCar: {$activeCarStore}
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
        /* background-color: #aaaaff; */
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
    .add{
      position: relative;
      left: 70%;
    }
    .active-car{
      background-color:#7777ee;
    }
</style>
