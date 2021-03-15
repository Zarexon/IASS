var firebaseConfig = {
  apiKey: "AIzaSyCQf5yItJ-zJrEGDeJJG5D8gh3j8YWKvYc",
  authDomain: "iass-2c31e.firebaseapp.com",
  databaseURL: "https://iass-2c31e-default-rtdb.firebaseio.com",
  projectId: "iass-2c31e",
  storageBucket: "iass-2c31e.appspot.com",
  messagingSenderId: "655893841003",
  appId: "1:655893841003:web:d8479c9ab1fc9897d8dd2e",
  measurementId: "G-GDSSJVJ7MT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    db.collection('meds').onSnapshot(snapshot => {
      console.log(snapshot.docs);
      setupUsers(snapshot.docs);
    });
  } else {
    console.log('user logged out');
    setupUsers([]);
  }
})

function stergereMedicament() {
  db.collection('meds').onSnapshot(snapshot => {
    deleteMed(snapshot.docs);
  });
}

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  // if (doc.data().BasicUser != true) {
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
    window.location.assign("index.html");
  });
  // }
});

const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = registerForm['register-email'].value;
  const pass = registerForm['register-password'].value;

  auth.createUserWithEmailAndPassword(email, pass).then((cred) => {
    const modal = document.querySelector('#modal-register');
    M.Modal.getInstance(modal).close();
    registerForm.reset();
    window.location.assign("index.html");
  });

});


