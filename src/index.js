import { openInstance } from './openInstance.js';
import { openComponent } from './openComponent.js';
import { openComponentOptions } from './openComponentOptions.js';

/**
 * Open Vue at anywhere.Append Vue to any dom.
 * @param {Element} appendTo An element that Vue append to.
 * @param {Vue|typeof Vue|Object} toOpen
 *     it could be three possibilities:
 *         1. A Vue instance.
 *         2. A Vue component(function). 
 *         3. Vue options(object).
 * @return {Object} {el,instance,close}
 *     el: the element of the Vue instance
 *     instance: the Vue instance
 *     close: a function call to remove the element from dom.If "toOpen" in params is not a Vue instance,the Vue instance auto created will be destroyed.
 */
function open({ appendTo, toOpen }) {
  if (toOpen._isVue) {
    return openInstance({ appendTo, instance: toOpen });
  } else if (typeof toOpen === 'function') {
    return openComponent({ appendTo, component: toOpen });
  } else if (typeof toOpen === 'object') {
    return openComponentOptions({ appendTo, options: toOpen });
  } else {
    throw new Error('vue-open:params of "open" function is not valid');
  }
}

export default {
  open,
};
