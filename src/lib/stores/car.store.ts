import { writable } from 'svelte/store';

const carList = writable([{
    make: "toyota",
    model: "camry",
    year: "2022",
    milage: 10000,
    condition: "fair"
},
{
    make: "toyota",
    model: "sienna",
    year: "2013",
    milage: 210000,
    condition: "fair"
},
{
    make: "honda",
    model: "accord",
    year: "2021",
    milage: 10000,
    condition: "good"
},
{
    make: "toyota",
    model: "odyssey",
    year: "2023",
    milage: 200,
    condition: "excellent"
},
{
    make: "ford",
    model: "crown victoria",
    year: "2005",
    milage: 137000,
    condition: "poor"
},
])
export default carList

