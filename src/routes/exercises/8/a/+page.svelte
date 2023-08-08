<script lang="ts">
  const numbers = [];

  for (let i = 1; i <= 12; i++) {
    numbers.push(i);
  }
</script>

<!------------------------------------------------------------>

<h2>Times table</h2>
<h4>Here is a typical grade-school times table from 1 to 12</h4>

<div class="row-of-nums header">
  <div class="cell header" />
  {#each numbers as num}
    <div class="cell">{num}</div>
  {/each}
</div>
row

{#each numbers as rowNum}
  <div class="row-of-nums">
    <div class="cell header">{rowNum}</div>
    {#each numbers as num}
      <div class="cell">{rowNum * num}</div>
    {/each}
  </div>
{/each}

<!------------------------------------------------------------>
<style lang="scss">
  .row-of-nums {
    display: flex;
    width: 500px;
  }

  .header {
    background: #666;
    color: #eee;
    font-weight: bold;
  }

  .cell {
    flex: 1;

    border: 1px #000000 solid;
    text-align: center;
  }
</style>
