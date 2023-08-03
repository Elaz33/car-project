import { writable } from 'svelte/store';

const carStore = writable([{
    id:1,
    make: "toyota",
    model: "camry",
    year: "2022",
    mileage: 10000,
    condition: "fair"
},
{
    id:2,
    make: "toyota",
    model: "sienna",
    year: 2013,
    mileage: 210000,
    condition: "fair"
},
{
    id:3,
    make: "honda",
    model: "accord",
    year: 2021,
    mileage: 10000,
    condition: "good"
},
{
    id:4,
    make: "toyota",
    model: "odyssey",
    year: 2023,
    mileage: 200,
    condition: "excellent"
},
{
    id:5,
    make: "ford",
    model: "crown victoria",
    year: 2005,
    mileage: 137000,
    condition: "poor"
},
]);

export default carStore;

