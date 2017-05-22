$(document).ready(function () {
    var bilgiler, ad, soyad, telefon;


   
    $("#gonder").click(function () {
       
       
        bilgiler = {
            adi: document.getElementById("ad").value,
            soyadi: document.getElementById("soyad").value,
            adres: document.getElementById("adres").value,
            telefon: document.getElementById("tel").value,
            hobiler: document.getElementById("hobi").value

        }

       

        console.log(bilgiler);
    });


  


});