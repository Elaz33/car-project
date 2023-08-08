<script>
    let pies = [];
    let copy;
    for (let i = 0; i <= 50; i++) {
        copy = i * Math.PI;
        pies.push(copy.toPrecision(3));
    }
    console.log(pies);
</script>

{#each pies as pi}
    <div>{pi}</div>
{/each}
