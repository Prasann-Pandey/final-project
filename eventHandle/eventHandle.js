const firstName = document.querySelector(".first-name")
const lastName = document.querySelector(".last-name")
const email = document.querySelector(".email")
const mobileNum = document.querySelector(".mobile")
const branch = document.querySelector(".branch")

const eventForm = document.querySelector(".signup")

eventForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let usrObj = {
        "firstName": firstName.value,
        "lastname": lastName.value,
        "email": email.value,
        "mobile": mobileNum,
    }
    console.log(usrObj)
})