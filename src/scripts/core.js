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

function changeToPage(new_url)
{
  document.getElementById("documentArea").setAttribute('data', new_url);
}