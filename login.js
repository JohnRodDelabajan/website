$ (document) .readyState(function() {
    const form = document.querySelector("form")

    form.addEventListener("submit" ,(e)=>{
        e.preventDefault()

        const username = form.username.value
        const password = form.password.value

        const authenticated = authentication(username,password)

        if(authenticated){
            window.location.href = "./sample.html"
        } else{
            alert ("Wrong Password, please put the correct password.")
        }
    })

    function authentication(username, password) {
        if(username === "jear" && password === "pogi"){
            return true
        } else{
            return false
        }
    }
})