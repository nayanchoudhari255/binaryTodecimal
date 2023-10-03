

function fun() {
	
var a=document.getElementById('bin').value;
var b=0;
var i=0;
while(a){
	b=b+Math.pow(2,i)*(a%10);
	i++;
	a=parseInt(a/10);

}
document.getElementById('dec').value=b;
return false;

	}