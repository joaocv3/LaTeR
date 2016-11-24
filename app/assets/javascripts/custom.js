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

function clean() {
    $('#msg').html('');
}

jQuery(function($) {
    //mask the input
    $(".date").mask("99/99/9999");

    $('#new_message').submit(function() {
        var datevalue = $('.date').val();
        return checkDate(datevalue);
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

function oneMonth(){
	later =  moment().add(1, 'month').calendar();
    document.getElementById("message_send_on").value = later;
}
function threeMonths(){
	later =  moment().add(3, 'months').calendar();
	document.getElementById("message_send_on").value = later;
}
function sixMonths(){
	later =  moment().add(6, 'months').calendar();
	document.getElementById("message_send_on").value = later;
}
function oneYear(){
	later =  moment().add(1, 'year').calendar();  
	document.getElementById("message_send_on").value = later;
}