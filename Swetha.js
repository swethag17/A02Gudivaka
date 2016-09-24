function fnlPrice(){
	var evnt = $("[name=event]").val();
	var nop = $("[name=nop]:checked").val();
	var fnlPrice = mul(evnt,nop);
	$("#fnlPrice").html(fnlPrice);
	// alert(fnlPrice);
}

function mul(a,b){
	if(!isNaN(a) && !isNaN(b))
		return a*b;
	else
		throw Error("values should be only Numbers");
}