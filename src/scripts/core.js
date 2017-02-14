/*
Date: Feb 14, 2017

Module: core.js

This module will contain general
functions that will control generic
site actions. Ex. the responsive nav
bar for screens less than 850px.

Written by: Lefteris Spetsakis
*/

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