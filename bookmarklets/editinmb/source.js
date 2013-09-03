/**
*
* @name EditInMB - Edit in Mockingbird
* @author Andy Hutchins <ahutchins@scrippsnetworks.com>
* @version 1.0
* @created 08/20/2013 11:50:10
*
**/
(function(w){
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // Only allow Mockingbird URLs
    if( w.location.href.indexOf('mockingbird2') > -1 ){
        var pid = getParameterByName('pid');
        var mockid = getParameterByName('mockid');
        // Current page must have a pid and mockid
        if( pid && mockid ){
            var editUrl = 'http://scrippsonline.com/mockingbird2/previewFormEdit.php?mockid=' + mockid + '&pid=' + pid;
            w.open(editUrl, '_self');
        } else {
            alert('Current page is not a MB preview page.');
        }
    } else {
        alert('Current page is not a MB preview page.');
    }
})(window);