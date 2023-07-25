<script lang="ts">
import { activeBoxStore } from '$lib/stores/active-box.store';


const boxes = [
  {
    id: 100,
    name: 'Joe Shmoe',
  },
  {
    id: 101,
    name: 'Jane Shmoe',
  },
  {
    id: 102,
    name: 'Chaim',
  },
  {
    id: 103,
    name: 'Elazar',
  },
  {
    id: 104,
    name: 'YDR',
  }
];




function onBoxClick(boxClicked) {
  activeBoxStore.set(boxClicked);
}

</script>
<!------------------------------------------------------------>

<div>

  {#each boxes as box}
    <div class="box" class:active={box === $activeBoxStore} on:click={() => onBoxClick(box)}>{box.name} ({box.id})</div>
  {/each}


</div>

<!------------------------------------------------------------>
<style lang="scss">
  .box {
    display: inline-block;
    border: 4px #000000 solid;
    padding: 30px;
    margin: 5px;
  }




  .active {
    background: #8888ff;
    color: #fff;
  }
</style>

