<script lang="ts">
    const cars = [
        {
            id: 1,
            make: "Pontiac",
            model: "Solstice",
            year: 2007,
            worth: 10241,
        },
        {
            id: 2,
            make: "Chevrolet",
            model: "Aveo",
            year: 2008,
            worth: 14187,
        },
        {
            id: 3,
            make: "Lexus",
            model: "LS",
            year: 1996,
            worth: 8187,
        },
        {
            id: 4,
            make: "Volkswagen",
            model: "Golf",
            year: 1996,
            worth: 20600,
        },
        {
            id: 5,
            make: "GMC",
            model: "Sierra",
            year: 2011,
            worth: 7386,
        },
        {
            id: 6,
            make: "Ford",
            model: "F-Series",
            year: 2011,
            worth: 23444,
        },
        {
            id: 7,
            make: "Toyota",
            model: "Corolla",
            year: 1997,
            worth: 22854,
        },
        {
            id: 8,
            make: "Chevrolet",
            model: "Suburban 1500",
            year: 2000,
            worth: 15415,
        },
        {
            id: 9,
            make: "Lincoln",
            model: "Continental",
            year: 1990,
            worth: 6748,
        },
        {
            id: 10,
            make: "Mazda",
            model: "Miata MX-5",
            year: 1995,
            worth: 9213,
        },
        {
            id: 11,
            make: "Kia",
            model: "Optima",
            year: 2006,
            worth: 9565,
        },
        {
            id: 12,
            make: "BMW",
            model: "X6",
            year: 2012,
            worth: 18057,
        },
        {
            id: 13,
            make: "Cadillac",
            model: "XLR",
            year: 2005,
            worth: 14709,
        },
        {
            id: 14,
            make: "Chevrolet",
            model: "3500",
            year: 1994,
            worth: 11627,
        },
        {
            id: 15,
            make: "Oldsmobile",
            model: "Aurora",
            year: 1995,
            worth: 15700,
        },
        {
            id: 16,
            make: "Porsche",
            model: "911",
            year: 2000,
            worth: 8699,
        },
        {
            id: 17,
            make: "Dodge",
            model: "Caravan",
            year: 2006,
            worth: 15939,
        },
        {
            id: 18,
            make: "Mercedes-Benz",
            model: "300SL",
            year: 1992,
            worth: 24626,
        },
        {
            id: 19,
            make: "Bentley",
            model: "Continental",
            year: 2012,
            worth: 10104,
        },
        {
            id: 20,
            make: "Cadillac",
            model: "Fleetwood",
            year: 1992,
            worth: 14047,
        },
        {
            id: 21,
            make: "Lexus",
            model: "SC",
            year: 2007,
            worth: 22622,
        },
        {
            id: 22,
            make: "Mercedes-Benz",
            model: "GL-Class",
            year: 2007,
            worth: 8151,
        },
        {
            id: 23,
            make: "Mercury",
            model: "Grand Marquis",
            year: 2000,
            worth: 22387,
        },
        {
            id: 24,
            make: "Ford",
            model: "Ranger",
            year: 2000,
            worth: 20933,
        },
        {
            id: 25,
            make: "Ford",
            model: "Taurus",
            year: 2004,
            worth: 7985,
        },
        {
            id: 26,
            make: "Mazda",
            model: "CX-7",
            year: 2010,
            worth: 15486,
        },
        {
            id: 27,
            make: "Saab",
            model: "900",
            year: 1995,
            worth: 12510,
        },
        {
            id: 28,
            make: "Jeep",
            model: "Grand Cherokee",
            year: 2003,
            worth: 17169,
        },
        {
            id: 29,
            make: "Chevrolet",
            model: "3500",
            year: 2000,
            worth: 15439,
        },
        {
            id: 30,
            make: "Volkswagen",
            model: "Cabriolet",
            year: 1985,
            worth: 5029,
        },
        {
            id: 31,
            make: "Volkswagen",
            model: "Jetta",
            year: 1991,
            worth: 13662,
        },
        {
            id: 32,
            make: "Lincoln",
            model: "Navigator L",
            year: 2007,
            worth: 19517,
        },
        {
            id: 33,
            make: "Honda",
            model: "Civic",
            year: 2004,
            worth: 22269,
        },
        {
            id: 34,
            make: "Pontiac",
            model: "Tempest",
            year: 1966,
            worth: 7742,
        },
        {
            id: 35,
            make: "Lexus",
            model: "GS",
            year: 1996,
            worth: 20929,
        },
        {
            id: 36,
            make: "BMW",
            model: "Z4",
            year: 2009,
            worth: 9341,
        },
        {
            id: 37,
            make: "Volkswagen",
            model: "Quantum",
            year: 1984,
            worth: 11547,
        },
        {
            id: 38,
            make: "Jaguar",
            model: "XJ Series",
            year: 2004,
            worth: 21503,
        },
        {
            id: 39,
            make: "Ford",
            model: "Escape",
            year: 2007,
            worth: 19745,
        },
        {
            id: 40,
            make: "Suzuki",
            model: "X-90",
            year: 1998,
            worth: 6374,
        },
        {
            id: 41,
            make: "Mazda",
            model: "Mazda6",
            year: 2003,
            worth: 17070,
        },
        {
            id: 42,
            make: "Subaru",
            model: "Outback",
            year: 2012,
            worth: 20120,
        },
        {
            id: 43,
            make: "Hyundai",
            model: "XG300",
            year: 2001,
            worth: 17652,
        },
        {
            id: 44,
            make: "Pontiac",
            model: "Grand Am",
            year: 1986,
            worth: 11453,
        },
        {
            id: 45,
            make: "Acura",
            model: "Legend",
            year: 1989,
            worth: 17617,
        },
        {
            id: 46,
            make: "Subaru",
            model: "Outback",
            year: 2003,
            worth: 13748,
        },
        {
            id: 47,
            make: "Lexus",
            model: "ES",
            year: 1992,
            worth: 7940,
        },
        {
            id: 48,
            make: "Mercedes-Benz",
            model: "SL-Class",
            year: 1998,
            worth: 16006,
        },
        {
            id: 49,
            make: "Land Rover",
            model: "Discovery",
            year: 1997,
            worth: 6451,
        },
        {
            id: 50,
            make: "Hyundai",
            model: "Santa Fe",
            year: 2009,
            worth: 15969,
        },
    ];
    let total: number = 0;
    for (const car of cars) {
        total += car.worth;
    }
</script>

<div class="header">
    <div class="header-item">Id</div>
    <div class="header-item">Make</div>
    <div class="header-item">Model</div>
    <div class="header-item">Year</div>
    <div class="header-item">Worth</div>
</div>
<div class="table">
    {#each cars as car}
        <div class="row">
            <div class="car-item">{car.id}</div>
            <div class="car-item">{car.make}</div>
            <div class="car-item">{car.model}</div>
            <div class="car-item">{car.year}</div>
            <div class="car-item">{car.worth}</div>
        </div>
    {/each}
    <div class="empty-row" />
    <div class="bottom-row">
        <div class="sum">{total}</div>
        <div class="bottom-row-title">Total</div>
    </div>
</div>

<style>
    .header {
        display: flex;
        width: 75%;
    }
    div.header > div:nth-child(5) {
        font-weight: bolder;
        font-size: x-large;
    }

    .header-item {
        width: 75%;
        text-align: center;
        flex: 1;
        padding: 5px;
        font-size: x-large;
    }
    .row {
        display: flex;
        flex: 1;
        width: 75%;
        justify-content: center;
    }
    div.row > div:nth-child(5) {
        font-weight: bolder;
        font-size: larger;
    }

    .car-item {
        display: flex;
        flex: 1;
        width: 75%;
        justify-content: center;
        border: solid black;
        padding: 7px;
    }
    .empty-row {
        display: flex;
        width: 73.6%;
        border: solid black;
        padding: 8px;
    }
    .bottom-row {
        display: flex;
        width: 74.6%;
        border: solid black;
        font-weight: bolder;
    }
    .bottom-row-title {
        position: relative;
        left: 18%;
        font-weight: bolder;
        font-size: xx-large;
    }
    .sum {
        position: relative;
        left: 86%;
        font-weight: bolder;
        font-size: xx-large;
    }
</style>
