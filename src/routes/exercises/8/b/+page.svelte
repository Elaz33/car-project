<script lang="ts">

  const nums = '5, 8, 13, 46, 888, 222';

  const numbers = nums.split(',');

  const numbersSplit = nums.forEach(number => {
    number = number.trim();
  });
  
</script>
<!------------------------------------------------------------>

<h2>Here is a sorted list of the numbers provided (descending order):</h2>

{each numbersSplit as number}
<div>{number}</div>
{/each}


<!------------------------------------------------------------>
<style lang="scss">

</style>

