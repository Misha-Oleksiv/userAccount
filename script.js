

const sel = selector => document.querySelector(selector);

sel('.btn-up').addEventListener('click', function () {
	sel('.completed').classList.add('active');
	sel('.account').classList.remove('active');
})

sel('.btn-out').addEventListener('click', function () {
	sel('.account').classList.add('active');
	sel('.completed').classList.remove('active');
	clearForm();
})

sel('.female').addEventListener('focus', function () {
	sel('.completed_male').classList.add('img_notactive');
	sel('.completed_female').classList.remove('img_notactive');
})

sel('.male').addEventListener('focus', function () {
	sel('.completed_female').classList.add('img_notactive');
	sel('.completed_male').classList.remove('img_notactive');
})

accountForm.signUp.addEventListener('click', function () {
	let userName = accountForm.userName.value;
	let userSurname = accountForm.userSurname.value;
	let userEmail = accountForm.userEmail.value;

	document.querySelector('#credentials').textContent = (userName + ' ' + userSurname);
	

	document.querySelector('#email-received').textContent = userEmail;

	for (let i = 1; i < accountForm.position.options.length; i++) {
		if (accountForm.position.options[i].selected) {
			let posission = accountForm.position.options[i].value;
			document.querySelector('#position-chosen').textContent = posission;
		}
	}
})



accountForm.check.addEventListener('click', function () {

	if (accountForm.check.checked) {
		document.getElementById("btnUp").disabled = false;
		accountForm.signUp.style.backgroundColor = 'rgb(49 124 49)';

	} else {
		document.getElementById("btnUp").disabled = true;
		accountForm.signUp.style.backgroundColor = 'rgb(28 78 28)';
	}
})

function clearForm() {
	userName.value = '';
	userSurname.value = '';
	userEmail.value = '';

	for (let i = 1; i < accountForm.position.options.length; i++) {
		if (accountForm.position.options[i]) {
			accountForm.position.options[0].selected = true;
		}
	}

	document.getElementById("btnUp").disabled = true;
	document.getElementById("check").checked = false;
}