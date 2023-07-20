<script>
    import carList from "$lib/stores/car.store";
</script>

<!-- I am making the table using divs -->
<div class="header">
    <div class="header-item">Make</div>
    <div class="header-item">Model</div>
    <div class="header-item">Year</div>
    <div class="header-item">Milage</div>
    <div class="header-item">Condition</div>
</div>
<div class="table">
    {#each $carList as car}
        <div class="row">
            <div class="row-item">{car.make}</div>
            <div class="row-item">{car.model}</div>
            <div class="row-item">{car.year}</div>
            <div class="row-item">{car.mileage}</div>
            <div class="row-item">{car.condition}</div>
        </div>
    {/each}
</div>

<br />
<!-- here I did using the table in my opinion so much easier and better -->
<table class="shulchan">
    <tr class="theader">
        <th class="theader-item">Make</th>
        <th class="theader-item">Model</th>
        <th class="theader-item">Year</th>
        <th class="theader-item">Milage</th>
        <th class="theader-item">Condition</th>
    </tr>
    {#each $carList as car}
        <tr class="trow">
            <td class="trow-item">{car.make}</td>
            <td class="trow-item">{car.model}</td>
            <td class="trow-item">{car.year}</td>
            <td class="trow-item">{car.mileage}</td>
            <td class="trow-item">{car.condition}</td>
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
        padding: 15px;
        font-size: larger;
    }
    .row {
        display: flex;
        flex: 1;
        width: 75%;
        justify-content: center;
        padding: 15px;
    }

    .row-item {
        display: flex;
        flex: 1;
        width: 75%;
        justify-content: center;
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
        font-size: large;
    }

    .trow-item {
        border: solid black;
        padding: 30px;
    }
</style>
