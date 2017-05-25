(jQuery)(document).ready(function () {

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    var gelenbilgiler = JSON.parse(getCookie("_deneme_cookie"));
    
    function checkCookie() {
        var adi = gelenbilgiler.adi;
        var soyadi = gelenbilgiler.soyadi;
        var adresi = gelenbilgiler.adres;
        var telefonu = gelenbilgiler.telefon;
        var hobileri = gelenbilgiler.hobiler;


        if (adi != "") 
            (jQuery)('#ad').val(adi);
        
        if (soyadi != "")
            (jQuery)('#soyad').val(soyadi);

        if (adresi != "")
            (jQuery)('#adres').val(adresi);

        if (telefonu != "")
            (jQuery)('#tel').val(telefonu);

        if (hobileri != "")
            (jQuery)('#hobi').val(hobileri);


        
    }
    checkCookie();
 
});
