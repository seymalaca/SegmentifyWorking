$(document).ready(function () {
    var bilgiler, ad, soyad, telefon, hobi;
    
    $("select")
      .change(function () {
          var x = document.getElementById("hobi").selectedIndex;
          var y = document.getElementById("hobi").options;
          
          $("select option:selected").each(function(){
              if (y[x].text == "Diğer")
                  document.getElementById("digerhobi").style.visibility = "visible";
              else
                  document.getElementById("digerhobi").style.visibility = "hidden";
              //$("digerhobi").show();       
          });
            
    
      })
      .change();
   
    $("#gonder").click(function () {

        var x = document.getElementById("hobi").selectedIndex;
        var y = document.getElementById("hobi").options;

        bilgiler = {
            adi: document.getElementById("ad").value,
            soyadi: document.getElementById("soyad").value,
            adres: document.getElementById("adres").value,
            telefon: document.getElementById("tel").value,
            hobiler: y[x].text
        }

        if (y[x].text == "Diğer") {
            bilgiler['hobiler'] = document.getElementById("digerhobi").value
        }    
       
        console.log(bilgiler);
        document.getElementById("anketform").reset();
    });


});