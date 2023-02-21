const getStyle = (el: HTMLElement, prop: string, isNumber = true) => {
  if (isNumber) {
    return parseInt(window.getComputedStyle(el, null)[prop]);
  }
  return window.getComputedStyle(el, null)[prop];
}

export default getStyle;