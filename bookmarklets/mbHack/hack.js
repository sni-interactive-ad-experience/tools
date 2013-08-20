(function() {
  // var getCookieObj = function() {
  //   var parts = document.cookie.replace("\" ", "").split(";");
  //   var objCookie = [],
  //   key, value;
  //   for (var i = 0; i < parts.length; i++) {
  //     bits = parts[i].split("=");
  //     key = bits[0].trim();
  //     value = bit[1];
  //     console.log(key + " : " + value);
  //     // console.log(key);
  //     objCookie.push({ key :  value });
  //   }
  //   return objCookie;
  // };

  getCookieObj();
  document.cookie += "; BasicLogin=" + "ahutchins";
})();
