function validator(){
	return (validateFutureDate() && checkEmail());
}

function validateFutureDate(){
	var resultDiv = document.getElementById("msg");

	clean();

	today = moment().startOf('day');
	form_date = document.getElementById('message_send_on').value;
	future = moment(form_date, "DD/MM/YYYY");

	res = future.diff(today, 'days');

	if (isNaN(res)){
		resultDiv.innerHTML += 'Invalid date';
		return false;
	}else{
		if (res<=0){
			resultDiv.innerHTML += 'Date must be tomorrow or LaTeR';
			return false;
     	}else{
			return true;
		}
	}
};

function checkEmail(){
	email = document.getElementById('message_email').value;
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
	    clean();
	    return true;
	}else{
    	document.getElementById("msg").innerHTML = "Invalid Email";
    	return false;
    }
}

function clean() {
    $('#msg').html('');
}

jQuery(function($) {
    //mask the input
    $(".date").mask("99/99/9999");
});

moment.locale('default', {
     longDateFormat : {
        L : "DD/MM/YYYY"
    }
});

function addTime(amount, period){
	later =  moment().add(amount, period).calendar();
    document.getElementById("message_send_on").value = later;
}
function fillExample(example){
	document.getElementById("message_content").value = example;
}