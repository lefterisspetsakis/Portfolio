/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function respTopNav()
{
  var x = document.getElementById("topNav");
  if (x.className === "topNavClass")
  {
    x.className += " responsive";
  }
  else
  {
    x.className = "topNavClass";
  }
}

function changeToPage()
{
//  // Wait for the page to load first
//  window.onload = function() {
//
//    //Get a reference to the link on the page
//    // with an id of "mylink"
//    var a = document.getElementById("mylink");
//
//    //Set code to run when the link is clicked
//    // by assigning a function to "onclick"
//    a.onclick = function() {
//
//      // Your code here...
//
//      //If you don't want the link to actually 
//      // redirect the browser to another page,
//      // "google.com" in our example here, then
//      // return false at the end of this block.
//      // Note that this also prevents event bubbling,
//      // which is probably what we want here, but won't 
//      // always be the case.
//      return false;
//    }
//  }
  document.getElementById("documentArea").setAttribute('data', 'projects.html');
//  var obj = document.getElementById("documentArea");
//  var content = obj.innerHTML;
//  obj.innerHTML= content;
}