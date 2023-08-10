<script>
    let triples = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            triples.push(i);
        }
    }
</script>

<div class="threes">
    {#each triples as three}
        <div class="three">{three}</div>
    {/each}
</div>
