export const hasOwn = (obj: any, key: string):boolean => Object.prototype.hasOwnProperty.call(obj, key);

export const type = (arg: any) => {
  const toString = Object.prototype.toString;
  const innerType = toString.call(arg).slice(8, -1).toLocaleLowerCase();
  return innerType;
}