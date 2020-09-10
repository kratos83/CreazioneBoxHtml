function testoBox() {
  var valoreImg = document.getElementById("textImmagine").value;
  if(valoreImg == "")
      alert("Inserisci il link dell'immagine");
  else{
    var valorePDF = document.getElementById("textPdf").value;
    if(valorePDF == "")
    {
        var testoImmagine = "<p align=\"center\"><img src=\""+valoreImg+"\" width=\"300\" height=\"200\"></p>";
        document.getElementById("textarea").innerHTML = testoImmagine;
        document.getElementById("anteprima").innerHTML = testoImmagine
    }
    else{
        var testoImmagine = "<p align=\"center\"><a href=\""+valorePDF+"\"><img src=\""+valoreImg+"\" width=\"300\" height=\"200\"></></p>";
        document.getElementById("textarea").innerHTML = testoImmagine;
        document.getElementById("anteprima").innerHTML = testoImmagine
    }  
  }
}

function copiaTesto() {
    let textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
    alert("Testo copiato");
}

function cancellaTesto() {
   document.getElementById("textarea").innerText = "";
   document.getElementById("textImmagine").value = "";
   document.getElementById("textPdf").value = "";
   document.getElementById("anteprima").innerText = "";
}
