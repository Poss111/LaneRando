var host = window.location.hostname;
if (host !== "localhost") {
  window.sessionStorage.setItem('googleAnalytics', 'true');
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'UA-155119202-1');
} else {
  window.sessionStorage.setItem('googleAnalytics', 'false');
  function gtag() { }
}
