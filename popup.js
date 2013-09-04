chrome.windows.getAll({ populate: true }, function(windowList) {
  document.write("<h2>windows: " + windowList.length + "</h2>");
  var tabs = 0;
  for (var i = 0; i < windowList.length; i++) {
      tabs += windowList[i].tabs.length;
    }
  document.write("<h2>tabs: " + tabs + "</h2>");
});