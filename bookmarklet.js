// Refer Here for more info 
// https://botleg.com/stories/bookmarklet-scripts/
// https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp

javascript: (function() {
  xhr = new XMLHttpRequest();
  xhr.open("POST", encodeURI("http://localhost:3000/api/bookmark"));
  xhr.send(JSON.stringify({
	title : document.title,
  	url: document.location.href
  }));
}());


javascript: (function() {
xhr = new XMLHttpRequest(); 
xhr.open("POST", encodeURI("http://localhost:3000/api/bookmark")); 
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify({ "title": document.title, "url": document.URL }));
alert("bookmark saved");
}());

javascript: (function() {

tags="";

if(tags=""){
  void(prompt('Copy to clipboard: Ctrl+C, Enter',title));
}

alert(tags);

xhr = new XMLHttpRequest(); 
xhr.open("POST", encodeURI("http://localhost:3000/api/bookmark")); 
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify({ "title": document.title, "url": document.URL }));
alert("bookmark saved");
}());


javascript: (function() {
tags="";
if(""==tags){ void(prompt('Enter bookmark tags',tags)); }
alert(tags);
}());


javascript: (function() {
  var el = '
    <div id="bookmarklet" style="
      position:fixed;
      background: #FFF;
      border: 1px #000 solid;
      right:50px;
      top:50px;
      z-index:1000;
      width:250px;
    ">
    Tag: <input type="text" id="tag-input">
    <button id="add-tag">Submit</button></div>';
  document.body.innerHTML += el;
}());

document.getElementById('add-tag').addEventListener("click", function () {
  xhr = new XMLHttpRequest();
  xhr.open("POST", encodeURI("http://localhost:8080"));
  xhr.send(JSON.stringify({
    url: document.location.href,
    tags: document.getElementById('tag-input').value
  }));
  document.getElementById('bookmarklet').remove();
});