<script lang="ts">

    let numbers:number[] = [];
    for(let i = 3; i <= 3000; i +=3){
       numbers.push(i);
    }
</script>

<!------------------------------------------------------------>

<h2>Numbers:</h2>
<div class="the-box">
    {#each numbers as three}
        <div class="item">{three}</div>
    {/each}
</div>

<!------------------------------------------------------------>
<!--<style lang="scss"></style>-->
<style>
    .the-box {
        display: flex;
        flex-wrap: wrap;
         justify-content: space-between;   
    }
    .item {
        flex: 1;
        background-color: blue;
        margin: 5px;
        padding: 10px;
    }
</style>
