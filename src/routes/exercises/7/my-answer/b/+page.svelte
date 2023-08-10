<script>
    let pies = [];
    for (let i = 1; i <= 50; i++) {
        const piMultiple = i * Math.PI;
        pies.push(piMultiple.toPrecision(3));
    }
    console.log(pies);
</script>

{#each pies as pi}
    <div>{pi}</div>
{/each}
