export default (arg: any) => {
  const toString = Object.prototype.toString;
  const innerType = toString.call(arg).slice(8, -1);
  return innerType;
}