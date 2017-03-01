var expect = chai.expect;

// WRITE YOUR TESTS HERE!
//FIRST USE DESCRIBE to say what were are testing, 100% needed to display tests
describe('replaceWith', () => {
  it('Should take a string, and replace the letters with that you pass in', () => {
    expect( replaceWith("awesome", "e", "z") ).to.equal('awzsomz'); 
  }); 
  it('Should be case sensitive', () => {
    expect( replaceWith('Foo', 'F', 'B') ).to.equal('Boo');
  })
});

describe('expand', () => {
  it('should return an expanded version of the function', ()=>{
    expect( expand([1,2,4],2) ).to.deep.equal([1,2,4,1,2,4]);
  });
  it('should double strings too', ()=>{
    expect( expand(['foo', 'test'], 1) ).to.deep.equal(['foo','test'])
  });
});

describe('acceptNumbersOnly', () => {
  it('should return true if everything passed in is a number', ()=>{
    expect( acceptNumbersOnly( 1,2,3,4,5,6,7,8 ) ).to.equal(true);
  });
  it('should return false if not all numbers', ()=>{
    expect( acceptNumbersOnly(1,2,'fkn foo') ).to.equal(false);
  });

 //look up deep equal for merge and below
describe('mergeArrays', () => {
  it('should merge two arrays', ()=>{
    //may have to deep equal
    expect( mergeArrays([2,1],[3,4,5]) ).to.deep.equal( [1,2,3,4,5] );
  });
  it('should sort two arrays', ()=>{
    //may have to deep equal
    expect( mergeArrays([10,5],[25,15,20]) ).to.deep.equal( [5,10,15,20,25] );
  });
 });

describe('mergeObjects', () => {
  it('takes in two objects and returns an object with the keys and values combined', ()=>{
    var obj1= {
    name: "Foo",
    num: 33
  }
  var obj2 = {
    test: "thing",
    num: 55
  }
    expect(mergeObjects(obj1, obj2)).to.deep.equal({
    name: "Foo",
    test: "thing",
    num: 55
  });
  
  });

});


});

