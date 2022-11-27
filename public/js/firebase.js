let firebaseConfig = {
    apiKey: "AIzaSyBldkBcz6dUYCxbrv8JPHxP1GbhaBHFKQ0",
    authDomain: "blog-clcm03.firebaseapp.com",
    projectId: "blog-clcm03",
    storageBucket: "blog-clcm03.appspot.com",
    messagingSenderId: "707800522848",
    appId: "1:707800522848:web:dc0aef2ac138b9cbdfa305",
    measurementId: "G-5BFYR4LQS6"
  };
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();