
function addPromise (a, b){
  return new Promise(function(resolve, reject){
    if(typeof(a) == 'number' && typeof(b) == 'number'){
      resolve(a+b);
    } else {
      reject('invalid data type');
    };
  });
};

addPromise(10, 72).then(function(num){
  console.log(`total = ${num}`);
}, function(err){
  console.log(err);
});
