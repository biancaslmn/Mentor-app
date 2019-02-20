import * as firebase from "firebase"



const googlebase = firebase.initializeApp({
   
        apiKey: "AIzaSyCzbjdeNomw0XPw7wwvHMvSaYLJOhvKGec",
        authDomain: "mentor-bb2b7.firebaseapp.com",
        databaseURL: "https://mentor-bb2b7.firebaseio.com",
        projectId: "mentor-bb2b7",
        storageBucket: "mentor-bb2b7.appspot.com",
        messagingSenderId: "648242390281"
    
});

export default googlebase;