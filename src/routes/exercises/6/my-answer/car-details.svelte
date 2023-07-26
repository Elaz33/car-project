<script lang="ts">
    import carList from "$lib/stores/car.store";
    import CarList from "./car-list.svelte";
    import { handleClick } from "$lib/stores/functional.store";
   import {activeCarStore} from "$lib/stores/functional.store";
    import Page from "../../4/instructions/+page.svelte";

  
</script>

<!-- {#each $carList  as car }
  <section class="car-info" contenteditable="true" bind:innerText={car.make}>  
    </section>   

     {#each $carList  as car }
  <section class="car-info" contenteditable="true" bind:innerText={car.model}>  
    </section>   
 -->
<section class="car-info" contenteditable="true">
    Make: <input class="car-info" type="text" value={$activeCarStore}/>  
    Model: <input class="car-info" type="text" />
    Year: <input class="car-info" type="number" />
    Condition: <input class="car-info" type="number"/>
</section>

<style>
    .car-info {
        position: relative;
        display: flex;
        flex: 1;
        width: fit-content;
        left: 10px;
        flex-direction: column;
        justify-content: right;
    }
</style>
