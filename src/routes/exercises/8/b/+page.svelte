<script lang="ts">
  let stringNumbs = "5, 8, 13, 46, 888, 222".split(",");
  let numbersSplit = stringNumbs.map((number) => {
    return (number = number.trim());
  });
      numbersSplit.sort((highest,lowest) => highest - lowest)
      numbersSplit.reverse()
</script>

<!------------------------------------------------------------>

<h2>Here is a sorted list of the numbers provided (descending order):</h2>

{#each numbersSplit as number}
  <div>{number}</div>
{/each}

<!------------------------------------------------------------>
<style lang="scss">
</style>
