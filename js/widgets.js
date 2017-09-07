function crossbtn(x){
			console.log(x.parentNode);
				($(x).parent().parent()).slideUp(500);
			}
			var cname="Bhubaneswar";
			function wc(){
				console.log("called");
				var handler=new XMLHttpRequest();
				var link="http://api.apixu.com/v1/current.json?key=481d45110351424ebc3104644170409&q="+cname+"";//paste here with proper api
				handler.open("GET",link,true);
				handler.onreadystatechange=function(){
					if(this.status==200 && this.readyState==4){
					var jsondata=JSON.parse(this.responseText);
					console.log(jsondata);
					var m="<div id='itemw' style='margin-top:40px;'><div id='itemsheader'><span id='reloadbtn' onclick='periodicupdate();' style='float:left'>&#x21bb;</span><div class='tooltip'><span id='changelocation' onclick='takeinputlocation();'>&#9881;</span> <span class='tooltiptext'>Change Location</span></div><span id='headerofitembox'>"+"Weather Forecast"+"</span><span id='crossbtn' onclick='crossbtn(this);'>x</span></div><div id='actdata'>"+jsondata.location.name+"<br>Humidity:"+jsondata.current.humidity+"% <br>Temrature:"+jsondata.current.temp_c+"deg <br>Windspeed: "+jsondata.current.wind_kph+"kph</div></div>";
					console.log(m);
					$(".left_nav").append(m);
					}
				};
handler.send();

}
wc();

function periodicupdate(){
				var handler=new XMLHttpRequest();
				var link="http://api.apixu.com/v1/current.json?key=481d45110351424ebc3104644170409&q="+cname+"";//paste here with proper api
				handler.open("GET",link,true);
				handler.onreadystatechange=function(){
					if(this.status==200 && this.readyState==4){
					var jsondata=JSON.parse(this.responseText);
					console.log(jsondata);
					
var x=""+jsondata.location.name+"<br>Humidity:"+jsondata.current.humidity+"% <br>Temrature:"+jsondata.current.temp_c+"deg <br>Windspeed: "+jsondata.current.wind_kph+"kph";
console.log(x);
document.getElementById("actdata").innerHTML=x;
					}
				};
handler.send();

}
function newsu(){
	var handler=new XMLHttpRequest();
				var link="https://newsapi.org/v1/articles?source=techcrunch&apiKey=15b627af0e21459289fe774762295bf9";
				handler.open("GET",link,true);
				handler.onreadystatechange=function(){
					if(this.status==200 && this.readyState==4){
					var jsondata=JSON.parse(this.responseText);
					console.log(jsondata);
					var counter=0;
					var m="<div id='itemw' style='margin-top:40px;'><div id='itemsheader'><span id='reloadbtn' onclick='periodicupdatenews();' style='float:left'>&#x21bb;</span><span id='headerofitembox'>"+"News Updates"+"</span><span id='crossbtn' onclick='crossbtn(this);'>x</span></div><div id='actnewsdata'><strong>"+jsondata.articles[counter].title+"</strong><br>"+jsondata.articles[counter].description+" <br><strong>Author: </strong>"+jsondata.articles[counter].author+"</div></div>";
					console.log(m);
					$(".left_nav").append(m);
					
}
};
handler.send();

}

newsu();
var counter=1;
function periodicupdatenews(){
var handler=new XMLHttpRequest();
				var link="https://newsapi.org/v1/articles?source=techcrunch&apiKey=15b627af0e21459289fe774762295bf9";
				handler.open("GET",link,true);
				handler.onreadystatechange=function(){
					if(this.status==200 && this.readyState==4){
					var jsondata=JSON.parse(this.responseText);
					console.log(jsondata);
					if(counter==5){
					counter=0;
					}
					var x="<strong>"+jsondata.articles[counter].title+"</strong><br>"+jsondata.articles[counter].description+" <br><strong>Author: </strong>"+jsondata.articles[counter].author+"";
					document.getElementById("actnewsdata").innerHTML=x;
					counter++;
					
}
};
handler.send();

}
	
function enterpressed(event){
	if(event.keyCode==13){
	console.log("Enter pressed");
	var x=$("#todolistid").val();
	var m="<div id='mytodolistel'><input type='checkbox' onclick='removeme(this);'>"+x+"<br></div>";
	$("#itemstodolist").prepend(m);
	return false;
	}
	return true;
}	

function updatetodolist(){
$("#itemstodolist").text("");
$("#todolistid").
$("#todolistid").attr("value","");
}

function removeme(e){
if(e.checked==true){
console.log("hi");
$(e).parent().slideUp(1000);
}
}

function takeinputlocation(){
	document.getElementById("actdata").innerHTML="";
	var m="<input type='text' name='locationarea' onkeypress='return enterpressedloc(event);' id='locationarea'>";
	$("#actdata").append(m);
	
}

function enterpressedloc(e){
if(e.keyCode==13){
console.log(e);
cname=$("#locationarea").val();
periodicupdate();
return false;
}
return true;
}

function showTime(){
var d=new Date();
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
$("#timewidet").text(d);
console.log(h+" "+m+" "+s);
}
showTime();

function periodicupdatetime(){
var d=new Date();
$("#timewidet").text(d);
}