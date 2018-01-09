(function(global) {
  loc = window.location;
  if (!(loc.host == "share.framerjs.com" || loc.host == "framer.cloud")) {
    alert("Use on share.framerjs.com or framer.cloud");
    return;
  }
  // https://framer.cloud/vqEuS/app.coffee
  window.location = loc.origin + "/" + loc.pathname + "app.coffee";
})(this);
