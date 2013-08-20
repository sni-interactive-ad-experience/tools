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

    if( w.location.host === 'scrippsonline.com' && w.location.pathname === '/mockingbird2/previewPageClient.php'){
        var pid = getParameterByName('pid');
        var mid = getParameterByName('mockid');
        var editUrl = 'http://scrippsonline.com/mockingbird2/previewFormEdit.php?mockid=' + mid + '&pid=' + pid;
        w.open(editUrl, '_self');
    } else {
        alert('Must be on a Mockingbird 2 preview url.');
    }
})(window);