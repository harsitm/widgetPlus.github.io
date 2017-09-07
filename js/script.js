var flag=0;
	var resor=0;
	var flags=0;
	var n1=0;
var n2=0;
function captcha(){
var x=document.getElementById("captchan1");
	document.getElementById("captchaeq").innerHTML="=";
	var z=document.getElementById("captchan2");
	var y=document.getElementById("captchasym");
	n1=Math.floor((Math.random()*(10-1+1))+1);
	n2=Math.floor((Math.random()*(10-1+1))+1);
	x.innerHTML=n1;
	z.innerHTML=n2;
	
	if(n1>n2)
	{
		flag=1;
		var o1=Math.floor((Math.random()*(2-1+1))+1);
		if(o1==1){
			flags=1;
		y.innerHTML="/";	
		}
		if(o1==2){
			flags=2;
			y.innerHTML="-";
		}
		
	}
	else
	{
		flag=2;
	var o2=Math.floor((Math.random()*(2-1+1))+1);
		if(o2==1){
			flags=3;
		y.innerHTML="*";	
		}
		if(o2==2){
			flags=4;
			y.innerHTML="+";
		}
	}
	
}
function checkres(){
	
	if(flag==1){
		if(flags==1){
				resor=Math.floor(n1/n1);
		}
		if(flags==2){
			resor=n1-n2;
			
		}
	}
	if(flag==2){
		if(flags==3){
			resor=n1*n2;
			
		}
		if(flags==4){
			resor=n1+n2;
		}
	}
	var res=document.getElementById("captchares").value;
	if(res!=resor)
	{
		
		document.getElementById("validorinvalid").innerHTML="Inorrect Captcha";
		captcha();
	}
	else{
		document.getElementById("validorinvalid").innerHTML="Correct";
		
	}
}

captcha();
document.getElementById("captchares").addEventListener(onkeyup,myfun);
function myfun(){
	document.getElementById("validorinvalid").innerHTML=" ";
}
function dispmsg(){
var x=document.getElementById("dsm");
var d=new Date();
var h=d.getHours();
if(h>=0 && h<12){
x.innerHTML="hi<br>good morning!";
}
else if(h>=12 && h<18)
{
//x.innerHTML="hi good afternoon!";
}
else if(h>=18 && h<=20)
{
x.innerHTML="hi<br>good evening";
}
else
{
x.innerHTML="hi<br>good night";
}
}
dispmsg();
//sign_in localStorage
if(typeof(Storage)!="undefined"){
localStorage.setItem("username1","mindfire");
localStorage.setItem("password1","mindfire");
}
else
{
//Not supported
}

function checkv(){
var un=document.getElementById("ip").value;
var pw=document.getElementById("ip1").value;
if(typeof(Storage)!="undefined"){
	if(un===localStorage.username1 && pw===localStorage.password1){
		var disp=document.getElementById("box");
		var disp1=document.getElementById("dsm1");
		disp.style.transition="display 3s";
		disp.style.display="none";	
		//disp1.style.display="none";	
		displaywelcome1();
	}
	else
	{
		location.reload();
	}
}
else
{
//do something
}
}
function displaywelcome1(){
	var dix1=document.getElementById("wmsg");
	dix1.innerHTML="Successfully Logged in!";
}
function displaywelcome(){
	var dix=document.getElementById("box1");
	var dix1=document.getElementById("wmsg");
	box1.style.display="block";
	dix1.innerHTML="Successfully Logged in!";
}

function signform(){
var disp=document.getElementById("box");
		var disp1=document.getElementById("dsm1");
		disp.style.transition="display 3s";
		document.getElementById("submitb1").style.display="none";
		var dix=document.getElementById("box1");
	var dix1=document.getElementById("wmsg");
	box1.style.display="block";
	disp.style.display="block";
	
	
}

function signform1(){

if(typeof(Storage)!="undefined"){
var un=document.getElementById("ipnew").value;
var pw=document.getElementById("ip1new").value;
localStorage.setItem("username2",un);
localStorage.setItem("password2",pw);

}
else
{
//do nothing
}
}

function nextpage(){
var disp=document.getElementById("box1a");
disp.style.display="none";
var disp1=document.getElementById("box2");
disp1.style.display="block";
console.log("NExt Page");
}
function nextpage1(){
var disp=document.getElementById("box2");
disp.style.display="none";
var disp1=document.getElementById("box3");
disp1.style.display="block";
}


function ona1(){
	document.getElementById("overlay1").style.display="block";
	
}

function ona2(){
	document.getElementById("overlay2").style.display="block";
	
}

function ona3(){
	document.getElementById("overlay3").style.display="block";
	
}

function ona4(){
	document.getElementById("overlay4").style.display="block";
	
}

function ona5(){
	document.getElementById("overlay5").style.display="block";
	
}
function offa1() {
    document.getElementById("overlay1").style.display = "none";
}
function offa2() {
    document.getElementById("overlay2").style.display = "none";
}function offa3() {
    document.getElementById("overlay3").style.display = "none";
}function offa4() {
    document.getElementById("overlay4").style.display = "none";
}function offa5() {
    document.getElementById("overlay5").style.display = "none";
}
var flag=0;
//form validation
function formValidation(){
	
	/*var txt="<button disabled onclick='nextpage();'>"+"Next"+"</button>";
			document.getElementById("submitbnext1").innerHTML=txt;*/
		var x = document.forms["myFrom1s"]["email1"].value;
		var y = document.forms["myFrom1s"]["email2"].value;
		var p1 = document.forms["myFrom1s"]["pass1"].value;
		var p2 = document.forms["myFrom1s"]["pass2"].value;
		if(x===y)
		{
			document.getElementById("email1").style.backgroundColor="white";
			document.getElementById("email1").style.color="black";
			document.getElementById("email2").style.backgroundColor="white";
			document.getElementById("email2").style.color="black";
			f1=true;
		}
		else
		{
			document.getElementById("email1").style.backgroundColor="red";
			document.getElementById("email1").style.color="white";
			document.getElementById("email2").style.backgroundColor="red";
			document.getElementById("email2").style.color="white";
			f1=false;
			
		}
		if(p1===p2){
			document.getElementById("pass1").style.backgroundColor="white";
			document.getElementById("pass1").style.color="black";
			document.getElementById("pass2").style.backgroundColor="white";
			document.getElementById("pass2").style.color="black";
			f2=true;
		}
		else{
			document.getElementById("pass1").style.backgroundColor="red";
			document.getElementById("pass1").style.color="white";
			document.getElementById("pass2").style.backgroundColor="red";
			document.getElementById("pass2").style.color="white";
			f2=false;
		}
		if(f1==true && f2==true){
			flag=1;
			document.getElementById("submitbnext1").removeAttribute("disabled");
			return false;
		}
		else{
			return false;
		}
}

function formValidation1(){
	
	var cnum=document.forms["myFrom2s"]["cnum"].value;
	var zip1=document.forms["myFrom2s"]["zip1"].value;
	var zip2=document.forms["myFrom2s"]["zip2"].value;
	if(cnum.length<10 ||cnum.length>10){
		document.getElementById("cnumber").style.backgroundColor="red";
		document.getElementById("cnumber").style.color="white";
		f1=false;
	}
	if(cnum.length==10){
		document.getElementById("cnumber").style.backgroundColor="white";
		document.getElementById("cnumber").style.color="black";
		f1=true;
	}
	if(zip1.length<6 || zip1.length>6)
	{
		document.getElementById("zip1id").style.backgroundColor="red";
		document.getElementById("zip1id").style.color="white";
		f2=false;
	}
	if(zip1.length==6){
		document.getElementById("zip1id").style.backgroundColor="white";
		document.getElementById("zip1id").style.color="black";
		f2=true;
	}
	if(zip2.length<6 || zip2.length>6)
	{
		document.getElementById("zip2id").style.backgroundColor="red";
		document.getElementById("zip2id").style.color="white";
		f3=false;
	}
	if(zip2.length==6){
		document.getElementById("zip2id").style.backgroundColor="white";
		document.getElementById("zip2id").style.color="black";
		f3=true;
	}
	if(f1==true && f2==true && f3==true)
	{
		document.getElementById("submitbnext2").removeAttribute("disabled");
		return false;
	}
	else
	{
		return false;
	}
}

function valida(){
		var x=document.forms["myFrom1s"]["fname"].value;
		
		if(x.length<3)
		{
			document.getElementById("ipnew").style.backgroundColor="red";
			document.getElementById("ipnew").style.color="white";
			
		}
		
		else{
		document.getElementById("ipnew").style.backgroundColor="white";
			document.getElementById("ipnew").style.color="black";
			
		}
}

		
	
		
		

	

