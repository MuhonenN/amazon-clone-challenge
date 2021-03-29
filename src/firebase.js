import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCPha63DX_U3F02RdOvd1lalt_Y7WZzP38",
    authDomain: "clone-challenge-acadf.firebaseapp.com",
    projectId: "clone-challenge-acadf",
    storageBucket: "clone-challenge-acadf.appspot.com",
    messagingSenderId: "51192873291",
    appId: "1:51192873291:web:6ec9840b960a01d72d28ce",
    measurementId: "G-0C2GLHC58K"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }