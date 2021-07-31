//Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCyGB8LMzEVHSCUlvCY3bzp8uFpLnWQUAQ",
    authDomain: "anukunj-b5764.firebaseapp.com",
    projectId: "anukunj-b5764",
    storageBucket: "anukunj-b5764.appspot.com",
    messagingSenderId: "290958606747",
    appId: "1:290958606747:web:520f186fe019450577a13e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Credential for signing in
const loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log("user have logged in")
            //Function for retriving all events data
            firebase.firestore().collection('events').get()
                .then(res => {
                    res.docs.forEach(el => console.log(el.data()))
                })
        })
        .catch((error) => {
            alert("Worng Credentials")
            console.log(error)

        });
}

const userLoginForm = document.querySelector('.user-login')
const userEmail = document.querySelector('.user-email')
const userPassword = document.querySelector('.user-password')

userLoginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    loginUser(userEmail.value, userPassword.value)
})


