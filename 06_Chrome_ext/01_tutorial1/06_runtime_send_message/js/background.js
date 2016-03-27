/**
 * Created by jzy on 16/3/27.
 */


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    sendResponse(JSON.stringify(arguments));
});