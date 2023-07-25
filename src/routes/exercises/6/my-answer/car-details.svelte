<script lang="ts">
    import carList from "$lib/stores/car.store";
    import CarList from "./car-list.svelte";
    import { handleClick } from "$lib/stores/functional.store";
    import { getEvent } from "$lib/stores/functional.store";
    import Page from "../../4/instructions/+page.svelte";
</script>

<!-- {#each $carList  as car }
  <section class="car-info" contenteditable="true" bind:innerText={car.make}>  
    </section>   
    {/each}
     {#each $carList  as car }
  <section class="car-info" contenteditable="true" bind:innerText={car.model}>  
    </section>   
    {/each} -->
<section class="car-info" contenteditable="true">
    {#each $carList as car}
        Make: <input class="car-info" type="text" bind:value={car.make} />
    {/each}
    {#each $carList as car}
        Model: <input class="car-info" type="text" bind:value={car.model} />
    {/each}
    {#each $carList as car}
        Year: <input class="car-info" type="number" bind:value={car.year} />
    {/each}
    Worth: <input class="car-info" type="number" />
</section>

<style>
    .car-info {
        position: relative;
        display: flex;
        flex: 1;
        width: fit-content;;
        left: 10px;  
        flex-direction: column;
        justify-content: right;
    }
</style>
