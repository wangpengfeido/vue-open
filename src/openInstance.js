/**
 * Append to the element of the vue instance to some dom
 * @param {Element} appendTo The dom that the element of the vue instance append to.
 * @param {Vue} instance The vue instance.**It's must have rendered.**
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
