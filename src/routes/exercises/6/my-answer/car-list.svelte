<script lang="ts">
    import carList from "$lib/stores/car.store";
    import { activeCarStore } from "$lib/stores/functional.store";
    import {addData} from "$lib/stores/functional.store";
    import {active} from "$lib/stores/functional.store";
    import {carOut} from "$lib/stores/functional.store";
    // import {removeData} from "$lib/stores/functional.store";
    // import { handleRowClick } from "$lib/stores/functional.store";
    let visible = false;  
    function handleRowClick(car) {
      if($activeCarStore === car){
        $activeCarStore = null;
      }
      else{
        $activeCarStore = car;
          visible = !visible;         
      }
    }  
    function removeData(){
      carList.update((cars)=>{
        alert('are you sure you want to remove this',cars)
        if($activeCarStore !== null)
            return[
                
                ...cars.slice()
            ]
             
          })
      }
</script>
<div class="button-group">
<button on:click={addData} class="add">add a car</button>
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
            on:click={()=>handleRowClick(car)}
             
        >
        <!-- I had to use contenteditable otherwise the bind innerText does not work -->
            <div class="row-item"contenteditable = 'true' bind:innerText={car.make}>{car.make}</div>
            <hr class="column-line" />
            <div class="row-item" contenteditable = 'true' bind:innerText={car.model}>{car.model}</div>
            <hr class="column-line" />
            <div class="row-item" contenteditable = 'true' bind:innerText={car.year}>{car.year}</div>
            <hr class="column-line" />
            <div class="row-item" contenteditable = 'true' bind:innerText={car.mileage}>{car.mileage}</div>
            <hr class="column-line" />
            <div class="row-item" contenteditable = 'true' bind:innerText={car.condition}>{car.condition}</div>
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
    .button-group{
        display: flex;
        position: relative;
        flex-direction: column;
        left: 65%;
        row-gap: 3px;
    }
    .add {
       width: 150px;
       background-color: aquamarine;
       color:#aaaaff
    }
    .delete{
        width: 150px;
        background-color: #990000;
        color: #ffff88;
       
    }
    .row.active-car {
        background-color: #7777ee;
    }
</style>
