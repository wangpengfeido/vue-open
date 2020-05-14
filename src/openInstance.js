/**
 * Append element of a Vue instance to a dom
 * @param {Element} appendTo An element appended to.
 * @param {Vue} instance A Vue instance.
 * @return {Object} {el,instance,close}
 *     el: the element of the Vue instance
 *     instance: the Vue instance
 *     close: a function call to remove the element from dom
 */
export function openInstance({ appendTo = document.body, instance }) {
  if (!instance.$el) {
    instance.$mount(document.createElement('div'));
  }
  let el = instance.$el;
  appendTo.appendChild(el);
  function close() {
    appendTo.removeChild(el);
  }
  return {
    el,
    instance,
    close,
  };
}
