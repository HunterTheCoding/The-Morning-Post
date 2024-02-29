importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

interface FirebaseProps {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseProps = {
  apiKey: "AIzaSyBxtWXY_xT1g7877KsTRePWXM5tMJ20Xi4",
  authDomain: "the-morning-post.firebaseapp.com",
  projectId: "the-morning-post",
  storageBucket: "the-morning-post.appspot.com",
  messagingSenderId: "1066398034849",
  appId: "1:1066398034849:web:ecd3de8d582feeb0e979e0"

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

