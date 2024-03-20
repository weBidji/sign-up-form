
const submitBtn = document.getElementById('submit-btn');
const pwd1 = document.getElementById('pwd1');
const pwd2 = document.getElementById('pwd2');
const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

pwd1.addEventListener('focusout', (e) => {
    if (!pwdRegex.test(pwd1.value)) {
        e.preventDefault();
        pwd1.setCustomValidity('Password must be between 6 and 20 characters long, contain at least one digit, one lowercase letter and one uppercase letter.');
    } else {
        pwd1.setCustomValidity('');
    }
}
)


submitBtn.addEventListener('click', (e) => {
    console.log('submitting')

    console.log('pwd1:', pwd1.value);
    console.log('pwd2:', pwd2.value);
    if (pwd1.value !== pwd2.value) {
        e.preventDefault();
        pwd2.setCustomValidity("Passwords do not match")
        console.log('nope');
    } else {
        pwd2.setCustomValidity('');
        pwd2.reportValidity();
        console.log('yes')
    }
}
)

