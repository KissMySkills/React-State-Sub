# React-State-Sub

Fast and scalable state-manager for apps based on React JS.

## Installation

```bash
npm i react-state-sub
```

## Usage

### First init your store

```js
// store.js
import ReactStateSub from 'react-state-sub';

const store = {
    // add your states inside the "initialState"
    // after initialization, all initial states will be defined at the top level of this store
    initialState: {
        counter: 0
    },
    
    // add your store functions, objects, primitives etc(everything you need)
    increment(){
        this.counter++;
    },

    decrement(){
        this.counter--;
    }
};

export default new ReactStateSub(store);
```

### Then import into your components and use

```js
// CounterValue.jsx
import store from './store.js';

function CounterValue() {
    const counter = store.sub('counter'); // subscribe to our "counter" state
    return <h1>Counter: {counter}</h1>;
}


// CounterMenu.jsx
import store from './store.js';

function CounterMenu() {
    // binding, because we use "this" in the store function (this is optional)
    const increment = store.increment.bind(store);
    const decrement = store.decrement.bind(store);
    return (<div>
        <button onClick={increment}>Increment</button>;
        <button onClick={decrement}>Decrement</button>;
    </div>);
}
```

### That's it!

## Usage for Crazy Dev

```js
// store.js
import ReactStateSub from 'react-state-sub';

const store = {
    initialState: {
        counter: 0
    }
    // without any methods
};

export default new ReactStateSub(store);


// CounterValue.jsx
import store from './store.js';

function CounterValue() {
    return <h1>Counter: {store.sub('counter')}</h1>; // Hmm, does it work? - Yes!
}


// CounterMenu.jsx
import store from './store.js';

function CounterMenu() {
    return (<div>
        <button onClick={e => store.counter++}>Increment</button>; // What the...
        <button onClick={e => store.counter--}>Decrement</button>; // Yes, you can change your states directly!
    </div>);
}
```
