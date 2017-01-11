function checkDate(idate){
    resultDiv = document.getElementById("msg"),
    // Verifies valid dates    
    dateReg = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]200[1-9]|20[1-9][0-9]/;
    var done = false;

    if(dateReg.test(idate)){
        if(isFutureDate(idate)){
            //clean the message
            clean();
            //finally, allow the user to pass the submit
            done = true;
        } else {
            resultDiv.innerHTML = "The date must be tomorrow or later!";
            resultDiv.style.color = "red";
        }
    } else {
        resultDiv.innerHTML = "Invalid date!";
        resultDiv.style.color = "red";
    }
    
    return done;
}

function isFutureDate(idate){
    var today = new Date().getTime(),
    idate = idate.split("/");

    idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
    return (today - idate) < 0 ? true : false;
}

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

    $('#new_message').submit(function() {
        var datevalue = $('.date').val();
        var email = $('.email').val();
        return checkDate(datevalue) && checkEmail(email);
     });
    
    $(".date").keyup(function(){
        //get the date
        var datevalue = $(this).val();

        //only if the date is full like this: 'xx/xx/xxxx' continue
        if(datevalue.length == 10) {  
			checkDate(datevalue);
        } else {
            clean();
        }
    });
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