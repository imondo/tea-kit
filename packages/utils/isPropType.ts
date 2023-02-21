const isPropType = (arg: any) => {
  const t = typeof arg;

  if(arg === null){
    return 'null';
  }

  if (t != 'object') {
    return t;
  }
  
  const toString = Object.prototype.toString;
  const innerType = toString.call(arg).slice(8, -1);
  const innerLowType = innerType.toLocaleLowerCase();

  if (['String', 'Number', 'Boolean'].includes(innerType)) {
    return innerType;
  }

  if (arg?.constructor?.name != innerType) {
    return arg.constructor.name;
  }

  return innerLowType;
}

export default isPropType;