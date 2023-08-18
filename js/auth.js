//**************************************************************
//**************************************************************
//      High5 PWA
//**************************************************************
//**************************************************************

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBJPo2rTUWiOuNEkLmJSmj64b3NvlJMm_A",
  authDomain: "high5-8436d.firebaseapp.com",
  projectId: "high5-8436d",
  storageBucket: "high5-8436d.appspot.com",
  messagingSenderId: "1045560772692",
  appId: "1:1045560772692:web:1b4c6ff711712f9286c5c1"
};

// Initialize Firebase
const res = firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();
const ref = firebase.storage().ref();

db.settings({ timestampsInSnapshots: true });

//**************************************************************
//      Root Scope Variable Declarations
//**************************************************************
let signupRedirect = true;

setTimeout(() => {
  signupRedirect = false;
}, 3000);

// Check auth state of user
auth.onAuthStateChanged((user) => {
  // Logged in and on login page
  if (user && (window.location.href.includes('index.html'))) {
    // Redirect to home page
    window.location.replace(`/pages/home.html`);
  }
  // Logged in and on signup page and login not due to sign up
  else if (user && (window.location.href.includes('signup.html')) && signupRedirect) {
    // Redirect to home page
    window.location.replace(`../pages/home.html`);
  }
  // Not logged in and not on login or signup page
  else if (!user && !(window.location.href.includes('index.html')) && !(window.location.href.includes('signup.html'))) {
    // Redirect to login page
    window.location.replace(`../index.html`);
  }
  // If logged in and on landing page: high5.wmdd.ca
  else if (user && !(window.location.href.includes('index.html')) && !(window.location.href.includes('signup.html')) && !(window.location.href.includes('home.html')) && !(window.location.href.includes('fallback.html'))) {
    // Redirect to home page
    window.location.replace(`/pages/home.html`);
  }
});