function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function validate() {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var signupEmail = document.getElementById('signupEmail');
  var signupPassword = document.getElementById('signupPassword');
  var signupPasswordConf = document.getElementById('signupPasswordConf');

  firstName.style.borderColor = (firstName.value.length < 1) ? "#f95c3c" : "#dbe2e8";
  lastName.style.borderColor = (lastName.value.length < 1) ? "#f95c3c" : "#dbe2e8";
  signupPassword.style.borderColor = (signupPassword.value.length < 8) ? "#f95c3c" : "#dbe2e8";
  signupPasswordConf.style.borderColor = (signupPasswordConf.value !== signupPassword.value || signupPasswordConf.value.length < 8) ? "#f95c3c" : "#dbe2e8";
  signupEmail.style.borderColor = (!validateEmail(signupEmail.value)) ? "#f95c3c" :  "#dbe2e8";
  if (firstName.value.length > 0 && lastName.value.length > 0 && signupPassword.value.length >= 8 && signupPasswordConf.value === signupPassword.value && validateEmail(signupEmail.value) ) {
    alert("Successful created");
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function authenticate() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var alert = document.getElementsByClassName('alert-warning');
  alert[0].style.display = 'inline-block';
  if ( email.length < 1 || password.length < 1 ) {
    alert[0].style.backgroundColor  = '#f95c3c';
    alert[0].innerHTML = "Must specify an email and password";
  } else if (email !== 'admin' || password !== 'admin') {
    alert[0].style.backgroundColor  = '#f95c3c';
    alert[0].innerHTML = "email or password is wrong";
  } else {
    alert[0].style.backgroundColor  = '#29910d';
    alert[0].innerHTML = "Login Successful";
  }
}


$('.datepicker').datepicker({
  format: 'mm/dd/yyyy',
  startDate: '-3d'
});