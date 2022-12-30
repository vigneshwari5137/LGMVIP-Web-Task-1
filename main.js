function add() {
    var li = document.createElement("li");
    var iV = document.getElementById("input").value;
    var td = document.createTextNode(iV);
    li.appendChild(td);
    if (iV === '') {
    window.alert("PLEASE FILL THE DETAILS");
    } else {
      document.getElementById("pp").appendChild(li);
    }
    document.getElementById("input").value = "";
    var rand = document.createElement("Button");
    var text = document.createTextNode("\u00D7");
    rand.className = "exit";
    rand.appendChild(text);
    li.appendChild(rand);
    for (i = 0; i < exit.length; i++) {
      exit[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
      }
    }
  }
  
var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("Button");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  list[i].appendChild(span);
}
var exit = document.getElementsByClassName("exit");
var i;
for (i = 0; i < exit.length; i++) {
  exit[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}
var td = document.querySelector('ul');
list.addEventListener('click', function(cl) {
  if (cl.target.tagName == 'LI') {
  cl.target.classList.toggle('checked');
  }
}, false);

var closebtns = document.getElementsById("pp");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}