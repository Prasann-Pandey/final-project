const firstName = document.querySelector(".first-name")
const lastName = document.querySelector(".last-name")
const email = document.querySelector(".email")
const mobileNum = document.querySelector(".mobile")
const branch = document.querySelector(".branch")

const eventForm = document.querySelector(".signup")

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


eventForm.addEventListener("submit", (e) => {
    e.preventDefault()
    firebase.firestore().collection("events").add({
        "first_name": firstName.value,
        "last_name": lastName.value,
        "mobile": 7267862,
        "email": email.value
    })
        .then(res => {
            alert("Docs added")
        })
        .catch(err => {
            console.log(err)
        })
    // console.log(usrObj)
})