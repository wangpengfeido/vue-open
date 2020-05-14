import Vue from 'vue';
import { openComponent } from './openComponent.js';

/**
 * use Vue options to create a Vue Component.Then instantiate it and append to a dom
 * @param {Element} appendTo An element appended to.
 * @param {Object} options Vue options.
 * @return {Object}
 */
export function openComponentOptions({ appendTo, options }) {
  const component = Vue.extend(options);
  return openComponent({ appendTo, component });
}
