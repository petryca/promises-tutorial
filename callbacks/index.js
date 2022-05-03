
// NO CALLBACK

/*
function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
  console.log(one(), script.src);
}
loadScript('./one.js');
*/

// CALLBACK

function loadScript(source, callback) {
  let scr = document.createElement('script');
  scr.src = source;

  // scr.onload = () => callback(scr);

  scr.onload = function () { callback(scr) };

  document.head.append(scr);
}


loadScript('./one.js', function(script) {
    console.log(one(), script.src);
});

/*
loadScript('./one.js', function(script) {
  console.log(one(), script.src);
  loadScript('./two.js', function(script) {
      console.log(two(), script.src);
      loadScript('./three.js', function(script) {
          console.log(three(), script.src);
      });
  });
});
*/

// WITH ERROR HANDLING
/*
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script); // null for error
  script.onerror = () => callback(new Error(`Script ${src} did not load`));

  document.head.append(script);
}
*/

/*
loadScript('./one.js', function(error, script) { // <--- add error here
    if(error) {
      console.log(error.message);
    } else {
      console.log(one(), script.src);
    }
});
*/


// PYRAMID OF DOOM
/*
loadScript('./one.js', function(error, script) { // <--- add error here
    if(error) {
      console.log(error.message);
    } else {
      console.log(one(), script.src);
      loadScript('./two.js', function(error, script) { // <--- add error here
          if(error) {
            console.log(error.message);
          } else {
            console.log(two(), script.src);
            loadScript('./three.js', function(error, script) { // <--- add error here
                if(error) {
                  console.log(error.message);
                } else {
                  console.log(three(), script.src);
                }
            });
          }
      });
    }
});
*/
