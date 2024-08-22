var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function toggle( targetID, click ){
if (document.getElementById){
  var divs=document.getElementsByTagName('div');

  var target = document.getElementById( targetID );
  var display = target.style.display;
  for(i=0; i<divs.length; i++){
    if(divs[i].className == "news" && divs[i]){
      divs[i].getElementsByTagName('div')[0].style.display="none";
      divs[i].getElementsByTagName('p')[0].innerHTML = "+";
    }
  }  
  target.style.display= ((display == 'inline') ? 'none' : 'inline');  

  click.innerHTML= (click.parentNode.getElementsByTagName('div')[0].style.display=="inline") ? '-' : '+';
}
}

function toggle2( targetID, click ){
if (document.getElementById){
  var divs=document.getElementsByTagName('div');

  var target = document.getElementById( targetID );
  var display = target.style.display;
  for(i=0; i<divs.length; i++){
    if(divs[i].className == "news" && divs[i]){
      divs[i].getElementsByTagName('div')[0].style.display="none";
      divs[i].getElementsByTagName('p')[0].innerHTML = "+";
    }
  }  
  target.style.display= ((display == 'inline') ? 'none' : 'inline');  

  click.innerHTML= (click.parentNode.getElementsByTagName('div')[0].style.display=="inline") ? '-' : '+';
}
}

function toggle3( targetID, click ){
if (document.getElementById){
  var divs=document.getElementsByTagName('div');

  var target = document.getElementById( targetID );
  var display = target.style.display;
  for(i=0; i<divs.length; i++){
    if(divs[i].className == "news" && divs[i]){
      divs[i].getElementsByTagName('div')[0].style.display="none";
      divs[i].getElementsByTagName('p')[0].innerHTML = "+";
    }
  }  
  target.style.display= ((display == 'inline') ? 'none' : 'inline');  

  click.innerHTML= (click.parentNode.getElementsByTagName('div')[0].style.display=="inline") ? '-' : '+';
}
}

icon = new Array(5);

icon[0] = "<b id='s001' width='24'>&nbsp;</b>";

icon[1] = "<b id='s002' width='24'>&nbsp;</b>";

icon[2] = "<b id='s003' width='24'>&nbsp;</b>";

icon[3] = "<b id='s004' width='24'>&nbsp;</b>";

icon[4] = "<b id='s005' width='24'>&nbsp;</b>";


index = Math.floor(Math.random() * 5);

function FP_openNewWindow(w,h,nav,loc,sts,menu,scroll,resize,name,url) 
{//v1.0
 	var windowProperties='';
	if(nav==false) windowProperties+='toolbar=no,'; 
		else
		windowProperties+='toolbar=yes,'; 
	if(loc==false) windowProperties+='location=no,';
		else 
		windowProperties+='location=yes,'; 
	if(sts==false) windowProperties+='status=no,';
		else
		windowProperties+='status=yes,';
	if(menu==false) windowProperties+='menubar=no,';
 		else
		windowProperties+='menubar=yes,';
	if(scroll==false) windowProperties+='scrollbars=no,';
 		else
		windowProperties+='scrollbars=yes,';
	if(resize==false) windowProperties+='resizable=no,';
		else
		windowProperties+='resizable=yes,';
	if(w!="") windowProperties+='width='+w+',';

	if(h!="") windowProperties+='height='+h; 
	
	if(windowProperties!="")
	{
		if( windowProperties.charAt(windowProperties.length-1)==',') 
   		windowProperties=windowProperties.substring(0,windowProperties.length-1);
	}

window.open(url,name,windowProperties);
}

function txtsub()
{
document.getElementById("ddl").selectedIndex = readCookie('contact');
if(readCookie('from') == null){
document.getElementById("from").value = '--enter your email--'
}
else{document.getElementById("from").value = readCookie('from')};

var obj = document.getElementById("ddl");
var message = "<textarea rows='15' name='required-message' cols='40' disabled />Please select a subject first.</textarea><br/>";
	var sub = new Array()
		sub[0] = "none"
		sub[1] = "article"
		sub[2] = "gallery"
		sub[3] = "japan"
		sub[4] = "comments"
		sub[5] = "error"
		sub[6] = "make"
		sub[7] = "radio"
		sub[8] = "because"
                sub[9] = "ns"
		sub[10] = "other"
	
	var msg = new Array()
		msg[0] = "Please select a subject before typing your message."
		msg[1] = "Please type a short description of your article, a brief summery or what inspired it."
		msg[2] = "Please type a short description of your submission why it is special to you."
		msg[3] = "Ask any question(s) concerning this topic."
		msg[4] = "What is good, what is bad?"
		msg[5] = "What seems to be wrong with this website?"
		msg[6] = "Give me details of what you would want your website to be."
		msg[7] = "Request songs / artists. Make sure to have correct spelling so I may find it."
		msg[8] = "Type anything here."
		msg[9] = "Type me an essay with good reasons and what you plan on using it for, be honest for alblil knows all"
                msg[10] = "(blank form)"

	for(i=0; i<=10; i++)
	{
		
		if(obj.selectedIndex == i)
		{
			var thing = sub[i];
			message = msg[i];
			var obg = document.getElementById( thing );
			obg.style.display = 'inline';
		}
		else
		{
			var thing = sub[i];
			var obg = document.getElementById( thing );
			obg.style.display = 'none';
		}

	}

message = "<textarea rows='15' name='required-message' cols='40'>"+message+"</textarea><br/>";
return message;

}

function contact()
{
	var selected = document.getElementById("ddl").selectedIndex;
        var name = document.getElementById("from").value;
	createCookie('contact',selected);
        createCookie('from',name);
	history.go(0);

}
/*COOKIE*/
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}

	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}


/*END COOKIE*/

function OnSubmitForm()
{
   document.emailform.action ="https://web.archive.org/web/20070330040123/http://alblil.com/cgi-bin/cgiemail/cgi-bin/contact_cc.txt";
   document.emailform.target = "i1";
   document.emailform.submit();
   document.emailform.action ="https://web.archive.org/web/20070330040123/http://alblil.com/cgi-bin/cgiemail/cgi-bin/contact.txt";
   document.emailform.target = "i2";
   document.emailform.submit();
   alert('Your message is being sent. Check your inbox for a confirmation email.');
   window.location = 'https://web.archive.org/web/20070330040123/http://alblil.com/index/contact/success.shtml';
   return true;
}

/*firefox close*/
function closeWindow() {

window.open('','_parent','');

window.close();

}

function oppic(di,num) 
{//v1.0
 	var windowProperties='';
	windowProperties+='toolbar=no,'; 
	windowProperties+='location=no,';	 
	windowProperties+='status=no,';
	windowProperties+='menubar=no,';
	windowProperties+='scrollbars=no,';
	windowProperties+='resizable=yes,';
	
	var w = 600;
	var h = 400;
	var url = 'https://web.archive.org/web/20070330040123/http://www.alblil.com/index/gallery/submissions/images/'+di+'/p-'+num+'.jpg';

	windowProperties+='width='+w+',';

	windowProperties+='height='+h; 
	
	if(windowProperties!="")
	{
		if( windowProperties.charAt(windowProperties.length-1)==',') 
   		windowProperties=windowProperties.substring(0,windowProperties.length-1);
	}

mywindow = window.open("",'',windowProperties);

var di2 = "'"+di+"'"+","+"'"+num+"'";

mywindow.document.write('<html>');
mywindow.document.write('<head>');
mywindow.document.write('<title>');
mywindow.document.write('albLIL.com gallery #'+di);
mywindow.document.write('</title>');
mywindow.document.write('<script type="text/javascript" src="https://web.archive.org/web/20070330040123/http://www.alblil.com/properties/default.js"></script>');
mywindow.document.write('</head>');
mywindow.document.write('<body>');
mywindow.document.write('<p>');
mywindow.document.write('<strong>');
mywindow.document.write('Window is reasizable');
mywindow.document.write('</strong>');
mywindow.document.write('<br / >');
mywindow.document.write('<a style="cursor:pointer" onclick="picvie('+di2+')">');
mywindow.document.write('&#60;&#60;Previous');
mywindow.document.write('</a> | ');
mywindow.document.write('<a style="cursor:pointer" onclick="picview('+di2+')">');
mywindow.document.write('Next&#62;&#62;');
mywindow.document.write('</a>');
mywindow.document.write('</p>');
mywindow.document.write('<p align="center">');
mywindow.document.write('<img src='+url+' height="85%" />');
mywindow.document.write('</p>');
mywindow.document.write('</body>');
mywindow.document.write('</html>');
mywindow.document.close();
}

function picview(di,num)
{
//-
num = num - -1;

//+
num = "0" + num;

if(num.length==3)
{
num = num.substr(1,2);
}


var di2 = "'"+di+"'"+","+"'"+num+"'";
var url = 'https://web.archive.org/web/20070330040123/http://www.alblil.com/index/gallery/submissions/images/'+di+'/p-'+num+'.jpg';

document.write('<html>');
document.write('<head>');
document.write('<title>');
document.write('albLIL.com gallery #'+di);
document.write('</title>');
document.write('<script type="text/javascript" src="https://web.archive.org/web/20070330040123/http://www.alblil.com/properties/default.js"></script>');
document.write('</head>');
document.write('<body>');
document.write('<p>');
document.write('<strong>');
document.write('Window is reasizable');
document.write('</strong>');
document.write('<br / >');
document.write('<a style="cursor:pointer" onclick="picvie('+di2+')">');
document.write('&#60;&#60;Previous');
document.write('</a> | ');
document.write('<a style="cursor:pointer" onclick="picview('+di2+')">');
document.write('Next&#62;&#62;');
document.write('</a>');
document.write('</p>');
document.write('<p align="center">');
document.write('<img src='+url+' height="85%" />');
document.write('</p>');
document.write('</body>');
document.write('</html>');
document.close();
}

function picvie(di,num)
{


//-
num = num -1;


//+
num = "0" + num;

if(num.length==3)
{
num = num.substr(1,2);
}
var di2 = "'"+di+"'"+","+"'"+num+"'";
var url = 'https://web.archive.org/web/20070330040123/http://www.alblil.com/index/gallery/submissions/images/'+di+'/p-'+num+'.jpg';

	document.write('<html>');
	document.write('<head>');
	document.write('<title>');
	document.write('albLIL.com gallery #'+di);
	document.write('</title>');
	document.write('<script type="text/javascript" src="https://web.archive.org/web/20070330040123/http://www.alblil.com/properties/default.js"></script>');
	document.write('</head>');
	document.write('<body>');
	document.write('<p>');
	document.write('<strong>');
	document.write('Window is reasizable');
	document.write('</strong>');
	document.write('<br / >');
	document.write('<a style="cursor:pointer" onclick="picvie('+di2+')">');
	document.write('&#60;&#60;Previous');
	document.write('</a> | ');
	document.write('<a style="cursor:pointer" onclick="picview('+di2+')">');
	document.write('Next&#62;&#62;');
	document.write('</a>');
	document.write('</p>');
	document.write('<p align="center">');
	document.write('<img src='+url+' height="85%" />');
	document.write('</p>');
	document.write('</body>');
	document.write('</html>');
	document.close();
}

function flash(w,h,url) 
{//v1.0
 	var windowProperties='';
	windowProperties+='toolbar=no,'; 
	windowProperties+='location=no,';	 
	windowProperties+='status=no,';
	windowProperties+='menubar=no,';
	windowProperties+='scrollbars=no,';
	windowProperties+='resizable=no,';
	windowProperties+='resizable=yes,';
	
	if(w!="") windowProperties+='width='+w+',';

	if(h!="") windowProperties+='height='+h; 
	
	if(windowProperties!="")
	{
		if( windowProperties.charAt(windowProperties.length-1)==',') 
   		windowProperties=windowProperties.substring(0,windowProperties.length-1);
	}

window.open(url,'',windowProperties);
}

function collapse( targetID, click )

{
    var target = document.getElementById(targetID);
    var tables = document.getElementsByTagName("table");
	var ps = document.getElementsByTagName("p");	
	for(i=0; i<ps.length; i++)
	{
		if (ps[i].innerHTML=="-")
		{
			ps[i].innerHTML="+";
		}
	}
	for(i=0; i<tables.length; i++)
	{
		if(tables[i].id==targetID){
			if(target.style.display == "none" || target.style.display == ""){
				tables[i].style.display = "inline";
				click.innerHTML = "-";}
			else{
				tables[i].style.display = "none";
				click.innerHTML = "+";}
		}
		else{tables[i].style.display = "none";}
	}
}

function video(w,h,url) 
{
OpenWindow=window.open("", "newwin", "height="+h+",width="+w+",toolbar=no,scrollbars=no,menubar=no");
OpenWindow.document.write("<HTML>")
OpenWindow.document.write("<TITLE>alblil VIDEOS</TITLE>")
OpenWindow.document.write("<BODY BGCOLOR=000000>")
OpenWindow.document.write("<object id='MediaPlayer1' classid='CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95' codebase='https://web.archive.org/web/20070330040123/http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701' standby='Loading Microsoft Windows® Media Player components...' type='application/x-oleobject' width='"+w+"' height='"+h+"'>")
OpenWindow.document.write("<param name='fileName' value='"+url+"'>")
OpenWindow.document.write("<param name='animationatStart' value='true'>")
OpenWindow.document.write("<param name='transparentatStart' value='true'>")
OpenWindow.document.write("<param name='autoStart' value='true'>")
OpenWindow.document.write("<param name='showControls' value='true'>")
OpenWindow.document.write("<param name='Volume' value='-20'>")		  
OpenWindow.document.write("<embed type='application/x-mplayer2' pluginspage='https://web.archive.org/web/20070330040123/http://www.microsoft.com/Windows/MediaPlayer/' src='"+url+"' width='"+w+"' height='"+h+"' autostart=1 showcontrols=1 volume=-20></EMBED>");
OpenWindow.document.write("</HTML>");
OpenWindow.document.close();
self.name="new";
}

function download(w,h,url) 
{//v1.0
 	var windowProperties='';
	windowProperties+='toolbar=no,'; 
	windowProperties+='location=no,';	 
	windowProperties+='status=no,';
	windowProperties+='menubar=no,';
	windowProperties+='scrollbars=no,';
	windowProperties+='resizable=no,';
	windowProperties+='resizable=yes,';
	
	if(w!="") windowProperties+='width='+w+',';

	if(h!="") windowProperties+='height='+h; 
	
	if(windowProperties!="")
	{
		if( windowProperties.charAt(windowProperties.length-1)==',') 
   		windowProperties=windowProperties.substring(0,windowProperties.length-1);
	}

window.open(url,'',windowProperties);
}

}
/*
     FILE ARCHIVED ON 04:01:23 Mar 30, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:58:44 Aug 22, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.006
  exclusion.robots: 0.061
  exclusion.robots.policy: 0.021
  esindex: 0.025
  cdx.remote: 11.267
  LoadShardBlock: 278.379 (3)
  PetaboxLoader3.resolve: 317.655 (4)
  PetaboxLoader3.datanode: 1184.495 (4)
  load_resource: 1250.646
*/