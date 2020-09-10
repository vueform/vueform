const getEventTarget = function(evt) {
  var targ = (evt.target) ? evt.target : evt.srcElement;
  if(targ != null) {
    if(targ.nodeType == 3)
      targ = targ.parentNode;
  }
  return targ;
}

export default function(elemId) {
  var theElem = getEventTarget(window.event);
  while(theElem != null) {
    if(theElem.id == elemId)
      return false;
    theElem = theElem.offsetParent;
  }
  return true;
}