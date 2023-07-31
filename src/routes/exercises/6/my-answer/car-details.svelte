<script lang="ts">
    import CarList from "./car-list.svelte";
   import {activeCarStore} from "$lib/stores/functional.store";


  
</script>

<section class="car-info">
    {#if $activeCarStore !== null}
    Make: <input class="car-info" type="text"  value={$activeCarStore.make}/>  
    Model: <input class="car-info" type="text" value= {$activeCarStore.model} />
    Year: <input class="car-info" type="number" value={$activeCarStore.year} />
    Condition: <input class="car-info" type="text" value={$activeCarStore.condition}/>
    {/if}
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
