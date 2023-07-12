<script lang="ts">

  const numbers = [];

  for (let i = 3; i <= 3000; i+=3) {
    numbers.push(i);
  }


</script>
<!------------------------------------------------------------>

<h2>Numbers:</h2>

{#each numbers as num}
  <span class="num">{num}</span>
{/each}

<!------------------------------------------------------------>
<style lang="scss">

  .num {
    display: inline-block;

    margin: 5px;
    padding: 5px;

    background: blue;
    color: white;
  }

</style>

