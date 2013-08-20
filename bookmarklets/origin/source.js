/**
*
* @name Origin - Will open the origin address for a url using correct origin for that site.
* @author Andy Hutchins <ahutchins@scrippsnetworks.com>
* @version 1.0
* @created 08/20/2013 11:50:10
*
**/
(function(w){
    var url = w.location.href;
    var host = w.location.host;
    var prefix = '';
    switch( host ){
        case 'hgtv.com':
            prefix = 'vgn3';
            break;
        case 'foodnetwork.com':
            prefix = 'origin2';
            break;
        case 'adimages.scrippsnetworks.com':
            prefix = 'origin';
            break;
        case 'common.scrippsnetworks.com':
            prefix = 'origin';
            break;
        // default:
        //     alert("Site not supported.");
        //     break;
    }
    console.log(prefix);
})(window);