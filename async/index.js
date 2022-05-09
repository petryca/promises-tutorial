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

// async / await is a self-invoking function
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

