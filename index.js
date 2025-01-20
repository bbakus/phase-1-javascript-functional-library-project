



function myEach(object, alert) {
    Object.keys(object).forEach(key => {
      alert(object[key])
    })
    return object
}

    
function myMap(collection, callback) {
    
    if (Array.isArray(collection)) {
      return collection.map(callback);
    }
    
    return Object.keys(collection).map(key => callback(collection[key]));
}

function myReduce(collection, callback, initialValue) {
    if (Array.isArray(collection)) {
      if (initialValue === undefined) {
        initialValue = collection[0];
        collection = collection.slice(1);
      }
      
      return collection.reduce(callback, initialValue);
    }
    
    const keys = Object.keys(collection);
    if (initialValue === undefined) {
      initialValue = collection[keys[0]];
      keys.shift();
    }
    
    return keys.reduce((acc, key) => callback(acc, collection[key]), initialValue);
}


function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      return collection.find(predicate);
    }
    
    if (typeof collection === 'object' && collection !== null) {
      return Object.values(collection).find(predicate);
    }
}

function myFilter(collection, callBackTrue) {
    if (Array.isArray(collection)) {
      return collection.filter(callBackTrue);
    }
    
    if (typeof collection === 'object' && collection !== null) {
      return Object.values(collection).filter(callBackTrue);
    }
}


function mySize(collection) {

    if (Array.isArray(collection)) {
      return collection.length;
    }
    
    if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
    
    return 0;
}


function myFirst(collection, n) {
    if (Array.isArray(collection)) {
      if (n === undefined) {
        return collection[0];
      }
      return collection.slice(0, n);
    }
    
    if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      if (n === undefined) {
        return collection[keys[0]];
      }
      return keys.slice(0, n).map(key => collection[key]);
    }
    
    return undefined;
}

function myLast(collection, n) {

    if (Array.isArray(collection)) {
      if (n === undefined) {
        return collection[collection.length - 1];
      }
      return collection.slice(-n);
    }
    
    if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);

      if (n === undefined) {
        return collection[keys[keys.length - 1]];
      }
      return keys.slice(-n).map(key => collection[key]);
    }
    return undefined;
}

function myKeys(collection){
        
    return Object.keys(collection)
        
}

function myValues(collection){
    return Object.values(collection)
}