<script lang="ts">

  const numbers = [];

  for (let i=0, len = numbers.length; i < 12; i++) {
    numbers[i] = i
  }


  numbers.map(MyNumber => MyNumber + 1);


</script>
<!------------------------------------------------------------>

<h2>Times table</h2>
<h4>Here is a typical grade-school times table from 1 to 12</h4>

<div class="row header">
  <div class="cell header"></div>
  {#each numbers as num}
    <div class="cell">{num}</div>
  {/each}
</div>row

<div class="row">
  {#each numbers as rowNum}
  <div class="cell header">{rowNum}</div>
  {#each numbers as num}
    <div class="cell">{num * num}</div>
  {/each}
  {/each}
</div>


<!------------------------------------------------------------>
<style lang="scss">


  .row {
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

