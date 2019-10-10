var xmlHttp=createXmlHttpRequestObject();

function createXmlHttpRequestObject(){


	var xmlHttp;
	if(window.ActiveXObject){
		try{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlHttp=false;
		}
	}
else{
try{
			xmlHttp=new XMLHttpRequest();
		}catch(e){
			xmlHttp=false;
		}}
	
if(!xmlHttp){
	alert("cant create object ");
}
else return xmlHttp;
}

function process(){


	if (xmlHttp.readyState==4 ||xmlHttp.readyState==0) {

		food=encodeURIComponent(document.getElementById("user").value);
		xmlHttp.open("GET","foodstore.php?food="+food,true);
		xmlHttp.onreadystatechange=handleServerResponse;
		xmlHttp.send(null);
	}

	else{setTimeout('process()',1000);


	}
}

function handleServerResponse(){


	if(xmlHttp.readyState==4){

		if(xmlHttp.status==200){
			xmlResponse=xmlHttp.responseXML;
			xmlDocumentElement=xmlResponse.documentElement;
			message=xmlDocumentElement.firstChild.data;
			document.getElementById("userinp").innerHTML='<span style="color:white;">'+message+'</span>';
			setTimeout('process()',1000);
		}
		else{
	alert("something is wrong");
}

	}
}
