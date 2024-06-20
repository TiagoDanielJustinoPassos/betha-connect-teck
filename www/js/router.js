document.addEventListener('deviceready', onDeviceReady, false);
 
var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'Betha Connect Teck',
    //App id 
    id: 'br.com.betha.connect',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      { //page 1
        path: '/index/',
        url: 'index.html',
        on: {
          pageInit: function (e, page) {
            $.getScript('js/index.js');
          },
        }
      },
      { //page 2
        path: '/editaros/',
        url: 'editaros.html',
        on: {
          pageInit: function (e, page) {
            $.getScript('js/editaros.js');
          },
      }
      },
      { //page 3.0
        path: '/viaconnect/',
        url: 'viaconnect.html',
        on: {
          pageInit: function (e, page) {
            $.getScript('js/viaconnect.js');
          },
        }
      },
      { //page 3.1
        path: '/criaros/',
        url: 'criaros.html',
        on: {
          pageInit: function (e, page) {
            $.getScript('js/criaros.js');
          },
        }
      },
      { //page 3.2
        path: '/viacliente/',
        url: 'viacliente.html',
        on: {
          pageInit: function (e, page) {
            $.getScript('js/viacliente.js');
          },
        }
      },
    ],
    // ... other parameters
  });

  function onDeviceReady() {
    var mainView = app.views.create('.view-main',{url: '/index/'});
 }