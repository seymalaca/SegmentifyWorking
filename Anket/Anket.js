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
    

    (jQuery)("#gonder").click(function (e) {
        window.location = "Hobiler.html";


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
  
        e.preventDefault();
        var id = $(this).data("id");
        console.log(id); // i am getting value in this id 
     
        console.log(bilgiler);

        
        setCookie("_deneme_cookie", JSON.stringify(bilgiler), 5);
    
    })


    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
});