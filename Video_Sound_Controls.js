// ==UserScript==
// @name        Video Sound Controls
// @namespace   http://ubiquity-inc.com/
// @include     http*://*.*
// @version     1
// @grant       none
// ==/UserScript==
var floatingMenu = document.createElement("DIV");
floatingMenu.id="VSCfloatingMenu";
floatingMenu.style.position = "absolute";
//floatingMenu.style.position = "relative"; -->for floating
floatingMenu.style.width = "200px";
floatingMenu.style.height = "70px";
//floatingMenu.style.float = "right"; -->for floating
floatingMenu.style.top = "10px";
floatingMenu.style.right = "10px";
//floatingMenu.style.margin = "1px auto"; -->for floating
floatingMenu.style.border = "1px solid #606060";
floatingMenu.style.backgroundColor = "#FFFFFF";
floatingMenu.style.zIndex = 100;
floatingMenu.innerHTML ="<h4>Video Sound Controls</h4>";
document.body.appendChild(floatingMenu);



var btnUM = document.createElement("BUTTON");
var btnUMLabel = document.createTextNode("Unmute All");
btnUM.appendChild(btnUMLabel);
btnUM.addEventListener("click", unmuteAllSound);
btnUM.style.border = "1px solid #606060";
btnUM.style.padding = "2px 2px 2px 2px";
btnUM.style.backgroundColor = "#55ACEE";
btnUM.style.borderRadius = "10px";
btnUM.style.marginTop = "13px";
document.getElementById("VSCfloatingMenu").appendChild(btnUM);


var btnM = document.createElement("BUTTON");
var btnMLabel = document.createTextNode("Mute All");
btnM.appendChild(btnMLabel);
btnM.addEventListener("click", unmuteAllSound);
btnM.style.border = "1px solid #606060";
btnM.style.padding = "2px 2px 2px 2px";
btnM.style.backgroundColor = "#55ACEE";
btnM.style.borderRadius = "10px";
btnM.style.marginTop = "13px";
document.getElementById("VSCfloatingMenu").appendChild(btnM);

function unmuteAllSound(){
  var video
  var vids = document.getElementsByTagName("video");

  for (video in vids){
    video.muted = false;
  }
  
  alert("All video sounds unmuted");
}

function muteAllSound(){
  var video
  var vids = document.getElementsByTagName("video");

  for (video in vids){
    video.muted = true;
  }
  
  alert("All video sounds muted");
  
}

