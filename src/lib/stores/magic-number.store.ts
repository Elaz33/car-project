
import { writable } from 'svelte/store';





function createMagicNumberStore() {
  const {subscribe, update, set} = writable(3);

  return {
    subscribe,
    decrement,
    increment,
    set,
  };


  function decrement() {
    update(oldValue => {
      return oldValue - 1;
    });
  }


  function increment() {
    update(oldValue => {
      return oldValue + 1;
    });
  }
}


export const magicNumberStore = createMagicNumberStore();






