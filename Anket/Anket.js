(jQuery)(document).ready(function () {
    var bilgiler, ad, soyad, telefon, hobi;

    (jQuery)('#digerhobi').hide();

    (jQuery)("input[id='diger']").click(function () {
        if (this.checked) {
            (jQuery)("#digerhobi").toggle();            
        }
        else {
            (jQuery)('#digerhobi').hide();
        }
    });
    

    (jQuery)("#gonder").click(function (event) {

        if ((jQuery)('#ad').val() == "" || (jQuery)('soyad').val() == "" || (jQuery)('#tel').val() == "") {
            alert("Yıldızlı alanlar boş bırakılamaz.");
            return false;
        }

        var hobi = "";

       (jQuery)('input[type="checkbox"]:checked').each(function () {
             hobi = hobi + this.value + ",";
        });      
                
        if ((jQuery)("#diger").is(":checked")) {
            
            hobi = hobi + (jQuery)("#digerhobi").val();
        }
           
        var updatedHobi = hobi.replace(",diger", "");
        
        bilgiler = {
        adi: (jQuery)('#ad').val(),
        soyadi: (jQuery)('#soyad').val(),
        adres: (jQuery)('#adres').val(),
        telefon: (jQuery)('#tel').val(),
        hobiler: updatedHobi
        }
  
        console.log(bilgiler);              

    });

    (jQuery)("#anketform")[0].reset();
});