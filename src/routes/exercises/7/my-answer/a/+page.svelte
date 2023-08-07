<script>
    let triples = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0) {
            triples.push(i);
        }
    }
    console.log(triples);
</script>

{#each triples as three}
    <div class="threes">{three}</div>
{/each}

