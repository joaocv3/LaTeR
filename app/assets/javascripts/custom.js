function validateFutureDate(){
	var resultDiv = document.getElementById("msg");

	clean();

	today = moment().startOf('day');
	form_date = document.getElementById('send_on').value;
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

function checkEmail(email){
    if( /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email )	) {  
	    clean();
	    return true;
	} else {
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


function addTime(amount, period){
	later =  moment().add(amount, period).calendar();
    document.getElementById("message_send_on").value = later;
}
function exampleTrip(){
	document.getElementById("message_content").value = "Have you already visited ... ?";
}
function exampleStudy(){
	document.getElementById("message_content").value = "Study...?";
}
function exampleWork(){
	document.getElementById("message_content").value = "Start working on...?";
}
function examplePersonal(){
	document.getElementById("message_content").value = "Have you started learning...?";
}