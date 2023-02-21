const hasOwn = (obj: any, key: string):boolean => Object.prototype.hasOwnProperty.call(obj, key);

export default hasOwn;