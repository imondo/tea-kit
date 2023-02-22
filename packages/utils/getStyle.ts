const getStyle = (el: HTMLEmbedElement, prop: keyof HTMLEmbedElement, isNumber = true) => {
  if (isNumber) {
    return parseInt(window.getComputedStyle(el, null)[prop as any]);
  }
  return window.getComputedStyle(el, null)[prop as any];
}

export default getStyle;