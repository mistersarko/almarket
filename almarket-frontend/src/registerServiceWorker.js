// registerServiceWorker.js

export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registered: ', registration);
        })
        .catch(registrationError => {
          console.log('ServiceWorker registration failed: ', registrationError);
        });
    });
  }
}
