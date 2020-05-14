import { openInstance } from './openInstance';

/**
 * instantiate a Vue component and append it to a dom
 * @param {Element} appendTo An element appended to.
 * @param {typeof Vue} component A Vue component.
 * @return {Object}
 */
export function openComponent({ appendTo, component }) {
  const instance = new component({
    el: document.createElement('div'),
  });
  const res = openInstance({ appendTo, instance });
  const close = res.close;
  res.close = function () {
    instance.$destroy();
    close();
  };
  return res;
}
