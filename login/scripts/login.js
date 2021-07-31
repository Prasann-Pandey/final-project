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
            alert("Wrong Credentials")
            console.log(error)

        });
}
//This function will create a user and make entry of user in user collections
const signUpUser = (email, password, name) => {
    console.log(email, name, password)
    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
        firebase.firestore().collection('users').doc(cred.user.uid).set({
            name: name
        })
            .catch(err => {
                console.log(err)
            })
    })
}

//If user is going to sign in
const userLoginForm = document.querySelector('.user-login')
const userEmail = document.querySelector('.user-email')
const userPassword = document.querySelector('.user-password')

const signup = document.querySelector(".signup")
signup.style.display = "none"


//If user is going to sign up
const userSignupForm = document.querySelector(".user-signup")
const newUserName = document.querySelector(".new-usr-name")
const newUserEmail = document.querySelector(".new-usr-email")
const newUserPass = document.querySelector(".new-usr-password")


//Buttons events
const signin = document.querySelector(".signin")
const signUpBtn = document.querySelector(".cred-info")

signUpBtn.addEventListener("click", () => {
    if (signup.style.display == "none") {
        signup.style.display = "block"
        signin.style.display = "none"
        signUpBtn.innerHTML = "Login"
    } else {
        signin.style.display = "block"
        signup.style.display = "none"
        signUpBtn.innerHTML = "Create an Account"
    }
})

userSignupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    signUpUser(newUserEmail.value, newUserPass.value, newUserName.value)
})

userLoginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    loginUser(userEmail.value, userPassword.value)
})


