# vue-open
Open Vue at anywhere.Append Vue to any dom.

## Install
````
npm install vue-open
````

## Reference
````
import vueOpen from 'vue-open'
````

## API
### vueOpen.open({ appendTo, instance })
* **appendTo** ````<Element>```` An element that Vue append to.
* **toOpen** ````<Vue|typeof Vue|Object>```` It could be three possibilities:
  * A Vue instance.
  * A Vue component(function).
  * Vue options(object).
* **return** ````<Object>```` {el, instance, close}
  * el: The element of the Vue instance.
  * instance: The Vue instance.
  * close: A function call to remove the element from dom. If "toOpen" in params is not a Vue instance, the Vue instance auto created will be destroyed.

