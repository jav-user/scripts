var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";

  req.onload = function (event) {
    var blob = req.response;
    console.log(blob.size);
    var link=document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    link.download="Dossier_" + new Date() + ".pdf";
    link.click();
  };

  req.send();
