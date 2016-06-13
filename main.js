$('#fahrenheit_to_celsius').click(function(){
	var fValue = $("#temperature").val();
	fValue -= 32;
	fValue /= 1.8;
	fValue = parseFloat(fValue);
	$('#result').html(fValue);
});
$('#celsius_to_fahrenheit').click(function(){
	var cValue = $("#temperature").val();
	cValue *= 1.8;
	cValue += 32;
	cValue = parseFloat(cValue);
	$('#result').html(cValue);
});
