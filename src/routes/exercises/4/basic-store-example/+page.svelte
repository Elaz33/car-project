<script lang="ts">

  import {magicNumberStore} from '$lib/stores/magic-number.store';


function reset() {
   magicNumberStore.set(0);
 }

</script>
<!------------------------------------------------------------>

<div class="parent">
  <div><button on:click={magicNumberStore.decrement}>-1</button></div>
  <div class="magic-number">{$magicNumberStore}</div>
  <div><button on:click={magicNumberStore.increment}>+1</button></div>
</div>

<button on:click={reset}>RESET</button>

<!------------------------------------------------------------>
<style>

  .parent {
    display: flex;
    align-items: center;
  }

  .magic-number {
    margin: 30px;
    font-size: 36px;
  }

  button {
    height: 40px;
  }

</style>

