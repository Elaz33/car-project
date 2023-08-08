<script>
    let triples = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0) {
            triples.push(i);
        }
    }
</script>

{#each triples as threes}
    <div class="threes">{threes}</div>
{/each}
