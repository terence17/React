var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var Id = document.getElementById('ID');
var addButton = document.getElementById('post');
var list = document.getElementById('one');


var addinfo = function () {
    var text1 = fname.value;
    var text2 = lname.value;
    var text3 = Id.value;
    var fn = "My Name is"
    var ident = "and my Student ID is "
    var li = document.createElement('li');
    li.innerHTML = "<label>" + fn + "</label>" + " " +  "<label>" + text1 + "</label>" + " " +
                    "<label>" + text2 + "</label>" + " " + "<label>" + ident + "</label>" +
                    "<label>" + text3 + "</label>" 
    list.appendChild(li);
}

addButton.onclick = addinfo;