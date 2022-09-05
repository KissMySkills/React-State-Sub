# Changelog

## 0.1.0

Now it's easier to subscribe to a state change.
#### Before
```jsx
const list = store.subTo('list');
```

#### Now
```jsx
const list = store('list');
```

Method "subTo" will be deprecated in the future.

## 0.0.5 (2022-09-05)

Added context auto-binding to store functions.<br/>
For example, now you don't need to bind the context in handlers.
#### Before
```jsx
// store.js
const store = {
    handler(){
        this.state += 1;
    }
    //...
};

// component
const Button = () => {
    return <div onClick={store.handler.bind(store)}></div>
}
```

#### Now
```jsx
// component
const Button = () => {
    return <div onClick={store.handler}></div> // store is already binded
}
```


## 0.0.4 (2022-09-01)

Added demos.<br/>
Bug fixed.<br/>
Removed a private object properties.<br/>

#### Before
```js
const obj = {
    #propertyName(){
        //...
    }
};
```

#### Now
```js
const obj = {
    __propertyName(){
        //...
    }
};
```