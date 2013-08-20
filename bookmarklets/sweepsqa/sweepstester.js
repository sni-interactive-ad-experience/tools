// SNI Sweeps Tester
// Version 0.1
// Andy Hutchins

(function(){
  // Get page values
  var pageInfo = {
    site:         mdManager.getSite() || "Unknown Site",
    pageDetailId: mdManager.getDetailId() || "Unknown Detail ID",
    sweepsCode:   $('input[name =fvContestId]').val() || "Unknown Sweeps ID",
    url:          mdManager.getParameterString('Url') || "Unknown URL"
  };

  // Setup Dummy Data as an array
  var dummy = {
    firstName: ["John", "Sally", "Susie", "Mary", "Tom"],
    lastName: ["Doe", "Test"],
    emailAddress: ["test@test.com"],
    address: ["1234 Test Avenue"],
    city: ["Knoxville", "Nashville", "Los Angeles", "New York"],
    state: [], // Uses random value of dropdown values. This is placeholder for future additions.
    zipCode: ["12345", "12345-1234"],
    phoneNumber: ["888-888-8888", "5555555555"],
    birthYear: [1980, 2004]
  };

  // Find Form fields
  var fields = {};
  fields.firstName    = ($('input[name="fvFirst"]').length > 0) ? $('input[name="fvFirst"]') : undefined;
  fields.lastName     = ($('input[name="fvLast"]').length > 0) ? $('input[name="fvLast"]') : undefined;
  fields.email        = ($('input[name="fvEmail"]').length > 0) ? $('input[name="fvEmail"]') : undefined;
  fields.emailConfirm = ($('input[name="fvEmailConfirm"]').length > 0) ? $('input[name="fvEmailConfirm"]') : undefined;
  fields.address1     = ($('input[name="fvAddress1"]').length > 0) ? $('input[name="fvAddress1"]') : undefined;
  fields.address2     = ($('input[name="fvAddress2"]').length > 0) ? $('input[name="fvAddress2"]') : undefined;
  fields.city         = ($('input[name="fvCity"]').length > 0) ? $('input[name="fvCity"]') : undefined;
  fields.select       = ($('select[name="fvState"]').length > 0) ? $('select[name="fvState"]') : undefined;
  fields.zip          = ($('input[name="fvZip"]').length > 0) ? $('input[name="fvZip"]') : undefined;
  fields.dayPhone     = ($('input[name="fvDayPhone"]').length > 0) ? $('input[name="fvDayPhone"]') : undefined;
  fields.evePhone     = ($('input[name="fvEvePhone"]').length > 0) ? $('input[name="fvEvePhone"]') : undefined;
  fields.birthYear    = ($('input[name="fvBirthYear"]').length > 0) ? $('input[name="fvBirthYear"]') : undefined;
  fields.gender       = ($('input[name="fvGender"]').length > 0) ? $('input[name="fvGender"]') : undefined;

  // Fill
  for(var f in fields){
    if( fields[f] === undefined){break;}
    console.log(fields[f]);
  }



// Fill in fields.
})(); // /iife