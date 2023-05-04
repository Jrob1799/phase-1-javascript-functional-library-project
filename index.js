function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value, index, coll) => {
      result.push(callback(value, index, coll));
    });
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;
    let keys;
    let start = 0;
  
    if (!Array.isArray(collection)) {
      keys = Object.keys(collection);
      collection = keys.map(key => collection[key]);
    }
  
    if (accumulator === undefined) {
      accumulator = collection[0];
      start = 1;
    }
  
    for (let i = start; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], i, collection);
    }
  
    return accumulator;
  }
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (value, index, coll) => {
      if (predicate(value, index, coll)) {
        result.push(value);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }