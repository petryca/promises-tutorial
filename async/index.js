function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script ${src} did not load`));

    document.head.append(script);
  });
}

(async () => {
  try {
    await loadScript('./one.js');
    await loadScript('./two.js');
    await loadScript('./three.js');
    console.log(one(), two(), three());
  } catch (error) {
    console.log(error.message)
  }
})();

/*
loader().then(
  function() { console.log(one(), two(), three()); },
).catch(
  function(error) { console.log(error.message); }
);
*/
