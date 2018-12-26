
var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
      console.log(deferredPrompt);
    })
    .catch(function(err) {
      console.log(err);
    });
    // if (deferredPrompt) {
    //   deferredPrompt.prompt();
  
    //   deferredPrompt.userChoice.then(function(choiceResult) {
    //     console.log(choiceResult.outcome);
  
    //     if (choiceResult.outcome === 'dismissed') {
    //       console.log('User cancelled installation');
    //     } else {
    //       console.log('User added to home screen');
    //     }
    //   });
  
    //   deferredPrompt = null;
    // }
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  // console.log('event =>', event)
  // event.prompt();
  // event.userChoice.then((choiceResult) => {
  //   console.log('result =>', choiceResult);
  // })
  deferredPrompt = event;
  console.log(deferredPrompt);
  return false;
});