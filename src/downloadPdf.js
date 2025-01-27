const navbar = document
  .querySelector(".pdfDownloadLink")
  .addEventListener("click", function (event) {
    var link = this.href;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", link, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      var blob = new Blob([xhr.response], { type: "application/pdf" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "Danton_Ferrari_Currículo.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    xhr.send();
  });
