fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
     for (let key in collection) {
        callback(collection[key],key,collection)
     }
     return collection
    },

    map: function(collection, callback) {
      arr = []
      for (let key in collection) {
         arr.push(callback(collection[key],key,collection))
      }
      return arr;
    },

    reduce: function(collection,callback,acc=0){

     for (let key in collection){

       acc = callback(acc, collection[key], collection)
     }
    return acc
    },

    find: function(collection,predicate) {
     for(let key in collection){
       if (predicate(collection[key])) {
         return collection[key]
       }
     }
    },

    filter: function(collection,predicate){
      arr = []
      for(let key in collection){
        if (predicate(collection[key])) {
          arr.push(collection[key])
        }
      }
      return arr;
    },

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length;
      }
      else {
        return Object.keys(collection).length;
      }

    },

    first: function(array, n=0){
      if (n === 0) {
        return array[0]
      } else {
        return array.slice(0,n);
      }
    },
    last: function(array, n=0){
      if (n === 0) {
        return array.slice(-1)[0];
      } else {
        return array.slice(-n);
      }
    },
    compact: function(array){
      arr = []
      for (let element of array) {
        if (element) {
          arr.push(element)
        }
      }
      return arr;
    },
    sortBy: function(array, callback){
      let newarr = [...array]
      return newarr.sort((a,b)=> {
        return callback(a) - callback(b)
      });
    },

    uniq: function(array,isSorted, callback){
     if (callback && isSorted=== false){
       arr1 = [];
       arr2 = [];
       for (let element of array){
         if (!arr1.includes(callback(element))) {
           arr1.push(callback(element))
           arr2.push(element);
         }
       }
       return arr2;

     } else {
       newarr = []
       for (let element of array){
        if (!newarr.includes(element)){
          newarr.push(element);
        }
      }
      return newarr;
     }

    },

    // sortBy: function(array, callback){
    //   newarr = [...array]
    //   for (let element of array){
    //     newarr.sort(callback(element))
    //   }
    //   return newarr;
    // }
   keys: function(object){
     arr = [];
     for(let key in object) {
      arr.push(key);
     }
     return arr;
   },

   values: function(object){
     arr = [];
     for(let key in object) {
      arr.push(object[key]);
     }
     return arr;
   },
   functions: function(object){
    arr = []
    for (let key in object){
      if (object[key]) {
        arr.push(key)
      }

    }
   return  arr.sort()
 },

 unpack: function(receiver, arr) {
    for (let val of arr)
      receiver.push(val)
  },

  flatten: function(collection, shallow, newArr=[]) {
    if (!Array.isArray(collection)) return newArr.push(collection)
    if (shallow) {
      for (let val of collection)
        Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
    } else {
      for (let val of collection) {
        this.flatten(val, false, newArr)
      }
    }
    return newArr
  }
  }
})()

fi.libraryMethod()
