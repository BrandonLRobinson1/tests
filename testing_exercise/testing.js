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
  // console.log(biggie)
  return biggie;
};

mergeArrays([10,5],[25,15,20])

//var mergeObjects = function(){};