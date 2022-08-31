# 0.0.4 (2022-09-01)

Added demos<br/>
Bug fixed<br/>
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