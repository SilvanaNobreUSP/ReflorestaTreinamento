document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("iframe.slides-frame").forEach(function (frame) {
    var source = frame.getAttribute("src");

    if (!source || source.indexOf(".pdf") === -1) {
      return;
    }

    var parts = source.split("#");
    var path = parts[0];
    var fragment = parts[1] ? "#" + parts[1] : "";
    var separator = path.indexOf("?") === -1 ? "?" : "&";

    frame.setAttribute("src", path + separator + "v=" + Date.now() + fragment);
  });
});
