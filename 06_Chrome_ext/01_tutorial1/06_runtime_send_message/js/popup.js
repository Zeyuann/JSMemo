/**
 * Created by jzy on 16/3/27.
 */
chrome.runtime.sendMessage("hello I'm part 6", function(response) {
    document.write(response);
})