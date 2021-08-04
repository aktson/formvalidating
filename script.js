const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
// const submit = document.querySelector ("button");


//function for show error

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector (".small");
    small.innerText = message;
}

//function for show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
// function to check valid email
function isValidEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (re.test(input.value.trim())) {
        showSuccess (input)
    } else {
        showError (input, "Email is not valid")

    }
}
//function check required 

function checkRequired (inputArr) {
    inputArr.forEach(function (input) {
 if (input.value.trim() === "" ) {
     showError (input, `${makeUpperCase(input)} is required`)
 }else {
     showSuccess(input);
 }
   });

}

//function to cheeck length

function checkLength (input, min, max) {
    if (input.value.length < min)
    showError(input, ` ${makeUpperCase(input)} can not be less than ${min}`)
    else if (input.value.length > max) {
        showError (input, `${makeUpperCase(input)} can not be more than ${max}`)
    } else {
        showSuccess (input);
    }
}

// function to check password match

function checkPasswordMatch (input1, input2) {
    if (input1.value !== input2.value) {
        showError (input2, "Password do not match")
    }
}

//function to convert first letter to upperCase in string

function makeUpperCase (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
   
}

//method 1 with  forEach, array and loop
form.addEventListener ("submit", function (e) {
    e.preventDefault();
    

    checkRequired([userName, email, password, password2]);
    isValidEmail (email);
    checkLength (userName, 3, 15);
    checkLength (password, 6, 25);
    checkPasswordMatch (password, password2)
})

//Method 2 with lot of if statements
// form.addEventListener ("submit", function (e) {
//     e.preventDefault();
//     console.log(e)

    // if (userName.value === "") {
    // showError (userName, "Username required")
    // } else {
    // showSuccess(userName)
    // }
    // if (email.value === "") {
    // showError (email, "email required")
    // } else if (!isValidEmail(email)) {
    //     showError (email, "Email not valid");
    // }
    //  else {
    // showSuccess(email)
    // }
    // if (password.value === "") {
    // showError (password, "Password required")
    // } else {
    // showSuccess(password)
    // }
    // if (password2.value === "") {
    // showError (password2, "Password2 required")
    // } else {
    // showSuccess(password2)
//     // }
// })
