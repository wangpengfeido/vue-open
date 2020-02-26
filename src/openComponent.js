import { openInstance } from './openInstance';

/**
 * @param {Element} appendTo
 * @param {Function} component
 */
export function openComponent({ appendTo, component, callToClose }) {
  const instance = new component({
    el: document.createElement('div'),
  });
  return {
    ...openInstance({ appendTo, instance, callToClose }),
    instance,
  };
}
