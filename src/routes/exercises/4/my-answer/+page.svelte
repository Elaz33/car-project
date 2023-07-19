<script>
    import carList from "$lib/stores/car.store";

    /**
     * @type {{ make: string; model: string; year: string; milage: number; condition: string; }[]}
     */
    let items;

    carList.subscribe((carItems) => {
        items = carItems;
    });
</script>

<!-- I am making the table using divs -->
<div class="header">
    <div class="header-item">Make</div>
    <div class="header-item">Model</div>
    <div class="header-item">Year</div>
    <div class="header-item">Milage</div>
    <div class="header-item">Condition</div>
</div>
<div class="row">
    {#each items as item}
        <div class="row-item">
            <div class="row-item">{item.make}</div>
            <div class="row-item">{item.model}</div>
            <div class="row-item">{item.year}</div>
            <div class="row-item">{item.milage}</div>
            <div class="row-item">{item.condition}</div>
        </div>
    {/each}
</div>

<br>
<!-- here I did using the table in my opinion so much easier and better -->
<table class="shulchan">
    <tr class="theader">
        <th class="theader-item">Make</th>
        <th class="theader-item">Model</th>
        <th class="theader-item">Year</th>
        <th class="theader-item">Milage</th>
        <th class="theader-item">Condition</th>
    </tr>
    {#each items as item}
        <tr class="trow-item">
            <td class="trow-item">{item.make}</td>
            <td class="trow-item">{item.model}</td>
            <td class="trow-item">{item.year}</td>
            <td class="trow-item">{item.milage}</td>
            <td class="trow-item">{item.condition}</td>
        </tr>
    {/each}
</table>

<style>
    .header {
        display: flex;
        width: 77.2%;
    }
    .header-item {
        width: 75%;
        text-align: center;
        flex: 1;
        background-color: red;
        padding: 15px;
        font-size: large;
    }

    .row-item {
        display: flex;
        flex: 1;
        width: 75%;
        justify-content: center;
        background-color: blue;
        border: solid black;
        padding: 15px;
    }

    /* the table stuff */
    .shulchan {
        border: solid black;
        width: 50%;
    }
    .theader-item {
        flex: 1;
        text-align: center;
        padding: 30px;
        background-color: red;
    }
    .trow-item {
        border: solid black;
        background-color: blue;
        padding: 30px;
    }
</style>
