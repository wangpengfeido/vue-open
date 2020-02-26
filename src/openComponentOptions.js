import Vue from 'vue';
import { openComponent } from './openComponent.js';

export function openComponentOptions({ appendTo, options }) {
  const Constructor = Vue.extend(options);
  const instance = new Constructor();
  openComponent({ appendTo, instance });
  return instance;
}
