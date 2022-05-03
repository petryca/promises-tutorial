function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script ${src} did not load`));

    document.head.append(script);
  });
}


/*
let promise = loadScript('./onex.js');


// The first argument of .then is a function that runs when the promise is resolved,
// and receives the result.
// The second argument of .then is a function that runs when
// the promise is rejected, and receives the error.

promise.then(
  function(script) { console.log(one(), script.src); },
  function(error) { console.log(error.message); }
)
*/

// using catch
/*
loadScript('./onex.js').then(
  function(script) { console.log(one(), script.src); },
).catch(
  function(error) { console.log(error.message); }
);
*/

// CHAINING 1
/*
loadScript('./one.js').then(
  function(script) {
    console.log(one(), script.src);
    return loadScript('./two.js');
  }
).then(
  function(script) {
    console.log(two(), script.src);
    return loadScript('./three.js');
  }
).then(
  function(script) {
    console.log(three(), script.src);
  }
).catch(
  function(error) { console.log(error.message); }
);
*/



// CHAINING 2
loadScript('./one.js').then(
  function(script) {
    return loadScript('./two.js');
  }
).then(
  function(script) {
    return loadScript('./three.js');
  }
).then(
  function(script) {
    console.log(one(), two(), three());
  }
).catch(
  function(error) { console.log(error.message); }
);
