var replaceWith = (word, letterToReplace, letterToReplaceWith) => {
  let split = word.split('');
  split.map( (item, index, collection) => {
    if ( item === letterToReplace ) {
      collection[index] = letterToReplaceWith;
    }
  })
  console.log(split.join(""));
  return split.join("");
}

var expand = (array, multiplyer) => {
  var results = [];
  let tempHold = [];
  for(var i = 0; i < multiplyer; i++){
    tempHold.push(array)
  }
  tempHold.forEach( (item, index) => {
    results = results.concat( item );
  } );

  console.log(results)
  return results
}

var acceptNumbersOnly = function(){
  var args = [].slice.call(arguments); // underscore way
  var status = true;
  args.forEach( (item, index)=>{
    typeof item === 'number' ? console.log('true') : status = false;
    // if ( typeof item !== 'number' ) {
    //   status = false
    // }
  } );
  return status
}

// acceptNumbersOnly(1,2,'3',4,5)

var mergeArrays = function(arr1, arr2){
  var biggie = arr1.concat(arr2);
  biggie.sort(function(a, b) {
    return a - b;
  });
  return biggie;
};

// mergeArrays([10,5],[25,15,20])
var tun1= {
    name: "Foo",
    num: 33
  }
  var tun2 = {
    test: "thing",
    num: 55
  }

var mergeObjects = function(obj1, obj2){
  var results = {};
  for(var key in obj1) {
    results[key] = obj1[key];
  }
  for(var key in obj2) {
    results[key] = obj2[key];
  }  
  console.log(results)
  return results;
};

mergeObjects(tun1, tun2);

