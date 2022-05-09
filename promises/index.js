// Function that returns a promise
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script ${src} did not load`));
  });
}

// The first argument of .then is a function that runs 
// when the promise is resolved, and receives the result.
// The second argument of .then is a function that runs when
// the promise is rejected, and receives the error.

let promise = loadScript('./one.js');

promise.then(
  script => console.log(one(), script.src),
  error  => console.log(error.message)
);

// USING CATCH

loadScript('./onex.js').then(
  script => console.log(one(), script.src),
).catch(
  error  => console.log(error.message)
);

// CHAINING

// empty pattern
loadScript().then().then().catch()


// pattern 1

loadScript('./one.js').then(
  script => {
    console.log(one(), script.src);
    return loadScript('./two.js');
  }
).then(
  script => {
    console.log(two(), script.src);
    return loadScript('./three.js');
  }
).then(
  script => {
    console.log(three(), script.src);
  }
).catch(
  error => { 
    console.log(error.message); 
  }
);


// pattern 2

loadScript('./one.js')
.then(() => loadScript('./two.js'))
.then(() => loadScript('./three.js'))
.then(() => console.log(one(), two(), three()))
.catch( error => console.log(error.message));
