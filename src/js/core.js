/*
Date: Feb 14, 2017

Module: core.js

This module will contain general
functions that will control basic
site actions.

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