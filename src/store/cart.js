import { writable } from "svelte/store";
 
const cart =writable([
    {
        id:1,
        name: 'Item 1',
        price: 1.99
        
    },
    {
        id:2,
        name:'Item',
        price: 2.99
    }
])
export default cart