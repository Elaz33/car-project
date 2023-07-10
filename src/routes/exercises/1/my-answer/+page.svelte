<script lang="ts">
    let incrementor = 0;
    let numThree = 1000;
    let threes: number[] = [...Array(numThree)].map(() => {
        return (incrementor += 3);
    });
</script>

<!------------------------------------------------------------>

<h2>Numbers:</h2>
<div class="the-box">
    {#each threes as three}
        <div class="items">{three}</div>
    {/each}
</div>

<!------------------------------------------------------------>
<!--<style lang="scss"></style>-->
<style>
    .the-box {
        display: flex;
        flex-wrap: wrap;
    }
    .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 1;
        background-color: blue;
        margin: 5px;
        padding: 10px;
    }
</style>
