$(document).ready(function () {
    const form = $('#registration-form')
    form.submit(function (evt) {
        evt.preventDefault()
        let [{value:firstName}] = $('#firstNameInput')
        let [{value:lastName}] = $('#lastNameInput')
        let [{value:email}] = $('#emailInput')
      
        $.post("/users",{firstName, lastName, email})
            .done(function(data){
                form[0].reset()
                const $successAlert = $( "<div class='alert alert-success text-center' role='alert'></div>" )
                $successAlert[0].innerText = `User (${data.lastName}, ${data.firstName}) has been created and is ${data.state.toUpperCase()}`
                form[0].parentElement.append($successAlert[0])
                const alert = $('.alert').first()
                setTimeout(() => {
                    console.log(alert)
                    alert.remove()
                }, 3000);
            })
    })
});

