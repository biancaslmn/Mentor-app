const auth = firebase.auth ();

//Signing In with Email and Password
auth.signInWithEmailAndPassowrd (email, password);

//Create New User with Email and Password
auth.createUserWithEmailAndPassword (email, password);

//Monitor Auth State
auth.onAuthStateChanged (firebaseUser => {});