/**
 * Append element of a vue instance to some dom
 * @param {Element} appendTo A element that the element of the vue instance append to.
 * @param {Vue} instance A vue instance.**It's must have rendered.**
 * @param {string} callToClose A function name defined on the vue instance. 
 * @return {Object} {el,close}
 *     el: the element be appended
 *     close: a function call to remove the element
 */
export function openInstance({ appendTo = document.body, instance, callToClose }) {
  const el = instance.$el;
  appendTo.appendChild(el);
  function close() {
    instance.$destroy();
    appendTo.removeChild(el);
  }
  if (callToClose && instance[callToClose]) {
    instance[callToClose]().then(() => {
      close();
    });
  }
  return {
    el,
    close,
  };
}
