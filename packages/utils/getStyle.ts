const getStyle = (el: Element, prop: keyof CSSStyleDeclaration, isNumber = true) => {
  if (isNumber) {
    return parseInt(window.getComputedStyle(el, null)[prop as any]);
  }
  return window.getComputedStyle(el, null)[prop as any];
}

export default getStyle;