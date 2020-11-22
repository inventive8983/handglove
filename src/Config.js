import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyABSLAgZnhQNTsYaFLwA06RzzZgIHihs_8",
    authDomain: "hand-glove.firebaseapp.com",
    databaseURL: "https://hand-glove.firebaseio.com",
    storageBucket: "hand-glove.appspot.com"
};
let app = Firebase.initializeApp(config);
export const db = app.database();