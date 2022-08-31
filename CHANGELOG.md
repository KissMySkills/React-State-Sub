# 0.0.2 (2022-09-01)

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