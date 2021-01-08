chrome.runtime.onInstalled.addListener(function (details) {
    chrome.storage.sync.set({ min: 0, max: 9 }, function () {

    })
});