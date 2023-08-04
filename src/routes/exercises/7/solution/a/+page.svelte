<script lang="ts">


  const numbers:number[] = [];

  // populate from 1..100
  for (let i=1; i <= 100; i++) {
    numbers.push(i);
  }

  // get all numbers which are divisible by 3
  const numbersDivided = numbers.filter(n => n % 3 === 0);


</script>
<!------------------------------------------------------------>

{#each numbersDivided as num}
  <div>{num}</div>
{/each}


<!------------------------------------------------------------>
<!--<style lang="scss"></style>-->

