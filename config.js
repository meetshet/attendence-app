import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyBqLpEeXGW8Xsl-q23snxwxvcpVs8ltLyU",
    authDomain: "school-attendance-app-c7b66.firebaseapp.com",
    projectId: "school-attendance-app-c7b66",
    storageBucket: "school-attendance-app-c7b66.appspot.com",
    messagingSenderId: "56363885430",
    appId: "1:56363885430:web:8ef73942c30a7ec9029057",
    measurementId: "G-KMH7P19YMY"
  };
  // Initialize Firebase
 if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  
export default firebase.database();