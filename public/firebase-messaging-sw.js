importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: import.meta.env.Vite_APIKEY,
  authDomain: import.meta.env.Vite_AUTHDOMAIN,
  projectId: import.meta.env.Vite_PROJECTID,
  storageBucket: import.meta.env.Vite_STORAGEBUCKET,
  messagingSenderId: import.meta.env.Vite_MESSAGINGSENDERID,
  appId: import.meta.env.Vite_APPID,
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
