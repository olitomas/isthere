# IsItThere?

Simple function that takes in an element and returns how much of it is visible in the viewport along with information about the top and bottom being visible

```js
import isItThere from "isitthere";

const elm = document.getElementById("iAmADOMElement");
const results = isItThere(elm);

console.log(results);
// {
//    topVisible: True,
//    bottomVisible: False,
//    percentVisible: 0.55,
// }
```
