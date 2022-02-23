function caculate(){
	var digit = parseFloat(document.getElementById('ct_100_txtDigit').value);

	if(!isNaN(digit)){
		var min = getMin(digit);
		var max = getMax(digit);
		var result = Math.floor(Math.random() * (max - min + 1) ) + min;
		document.getElementById('ct100_lblResult').innerHTML = result;
	}
}

function getMin(digit)
{
	var min;
	if (digit > 1)
    {
		min = Math.pow(10, digit - 1);
	}
	else
	{
		min = 1;
	}
	return min;
}

function getMax(digit)
{
	return (getMin(digit+1) - 1);
}