<script>
    let pies = [];
    for (let i = 0; i <= 50; i++) {
        pies.push(i * Math.PI);
    }
    console.log(pies);
</script>

{#each pies as pi}
    <div>{pi}</div>
{/each}
