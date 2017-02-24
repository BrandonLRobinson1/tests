var replaceWith = (word, letterToReplace, letterToReplaceWith) => {
  var split = word.split('');
  split.map( (item, index, collection) => {
    if ( item === letterToReplace ){
      // console.log(collection[index], letterToReplaceWith)
      collection[index] = letterToReplaceWith;
      // console.log(collection[index], ' after')
    }
  })
  console.log(split)
  return split.join("");
}

replaceWith("awesome", "e", "z")