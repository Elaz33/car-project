<script lang="ts">

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


  let activeBoxId:number|null = null;
  
  
</script>
<!------------------------------------------------------------>

<div>
{#each boxes as box}
  <div class="box" class:active-box={activeBoxId === box.id} on:click={() => { activeBoxId = box.id }}>{box.name}</div>
{/each}
</div>

<div class="active-box-id">
  activeBoxId: {activeBoxId}
</div>
<!------------------------------------------------------------>
<style lang="scss">
  .box {
    display: inline-block;
    border: 4px #000000 solid;
    padding: 30px;
    margin: 5px;
  }

  .active-box-id {
    margin-top: 150px;
    font-size: 30px;
  }


  .active-box {
    background: #8888ff;
    color: #fff;
  }
</style>

