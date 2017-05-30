/* Kod içerisine hangi satırın ne iş yaptığını anlatan açıklama satırları ekleyebilir misin ? :)
Ek olarak X bir durumda kod üzerinde hata oldu diyelim, bunu müşteriye ya da console'a basmadan nasıl yakalayabilirsin?
*/
function product() {
var size=[];
var color=[];
jQuery('#product_addtocart_form label').each(function() {
            
                if(jQuery(this).attr('class')!="notsalable") {
                  size.push(jQuery(this).find('.size-number').text().trim());
                }

              
            });

jQuery('.opt_renk a').each(function() {
          
                color.push(jQuery(this).attr('title'));
              
            });
	var pr={
	"name": "PRODUCT_VIEW",
	'pageUrl':window.location.href,
	'title':jQuery(".productDesc").text().trim(),
	'url': window.location.href,
	'image':(jQuery)('.galleryImg').attr('src'),
	'categories': (jQuery)('meta[name="sgm:pageCat"]').attr("content").split(">"),
	'price': (jQuery)('.newPrice:first').text().replace(',', '.'),
	'inStock':(jQuery)(".button block bg-red sepete-ekle urun-detay-sepete-ekle sp-goal-672-c308-22-1492031008114").is(":visible"),//burası false dönüyor,sebebini anlayamadım
	'brand':(jQuery)(".productTitle").text().trim(),
	'gender':(jQuery)("td[data-attr='cinsiyet']").text().trim(),
	'labels':(jQuery)("table[class='amlabel-table top-center']"),//bunun ile istediğin kısımları döndürüyorum sanırım fakat "yeni, internete özel" gibi text'leri alacağım yeri bulamadım. style kısmındaki resmin source edildiği png uzantılı dosyanın isminde geçiyor sadece ordan çekmek de saçma geldi:)
	'sizes': size,
	'colors': color,
	'productUrl':window.location.href
}
return pr;
}