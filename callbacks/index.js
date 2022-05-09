
// NO CALLBACK – THIS WILL FAIL

function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

loadScript('./one.js');
console.log(one(), script.src);

// WITH CALLBACK

function loadScript(source, callback) {
  let script = document.createElement('script');
  script.src = source;
  document.head.append(script);

  script.onload = () => callback(source);
}

loadScript('./one.js', function (script) {
    console.log(one(), script.src);
});

loadScript('./one.js', script => {
  console.log(one(), script.src);
  loadScript('./two.js', script => {
      console.log(two(), script.src);
      loadScript('./three.js', script => {
          console.log(three(), script.src);
      });
  });
});


// WITH ERROR HANDLING

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);

  script.onload = () => callback(null, script); // use null for error
  script.onerror = () => callback(new Error(`Script ${src} did not load`));
}


loadScript('./one.js', (error, script) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(one(), script.src);
    }
});


// PYRAMID OF DOOM

loadScript('./one.js', function (error, script) {
    if (error) {
      console.log(error.message);
    } else {
      console.log(one(), script.src);
      loadScript('./two.js', function (error, script) {
          if (error) {
            console.log(error.message);
          } else {
            console.log(two(), script.src);
            loadScript('./three.js', function (error, script) {
                if (error) {
                  console.log(error.message);
                } else {
                  console.log(three(), script.src);
                }
            });
          }
      });
    }
});
