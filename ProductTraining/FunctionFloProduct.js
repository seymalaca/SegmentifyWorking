function product() {
var size=[];
var color=[];
var label=[];
jQuery('.amlabel-table td').each(function() { //class'ı amlabel-table olanların tüm td'lerine bakılıyor.
            
                if(jQuery(this).attr('style')!="") {
                  label.push(jQuery(this).attr('style').trim().split(/[/.]/).splice(-2,1).pop());//bakılanların trim() ile boşlukları temizleniyor. alınan string regex kullanılarak "/" ve "." karakterlerine göre split ediliyor. bu durumda string'deki ".png"den sonrası son eleman oluyor.bunu kaldırıp ".png"den öncesini almak için; splice içindeki -2 sayesinde sondan bir önceden başlanıyor, splice içindeki 1 sayesinde bir tane eleman siliniyor. pop ile de son elemana ulaşılıyor. 
                }

              
            });
jQuery('#product_addtocart_form label').each(function() { //id'si product_addtocart_form olan element'in tüm label'larına bakılıyor.
            
                if(jQuery(this).attr('class')!="notsalable") { //bakılanların class attribute'u notsalable'a eşit değilse alt satırdaki kod çalışıyor.
                  size.push(jQuery(this).find('.size-number').text().trim()); //class'ı size-number olanlar "size" adlı yukarıda oluşturduğum değişkene ekleniyor.
                }

              
            });

jQuery('.opt_renk a').each(function() { //opt_renk class'ında ve a etiketi altında olan her bir elemente bakılıyor.
          
                color.push(jQuery(this).attr('title')); //her element'in title'ı yukarıda oluşturduğum color adlı değişkene ekleniyor.
              
            });
	var pr={
	"name": "PRODUCT_VIEW", //sabit
	'pageUrl':(jQuery)('link[rel="canonical"]').attr("href"), //rel değeri canonical'a eşit linkin href attribute'u alınıyor.
	'"productId':(jQuery)('#socialmedia a').attr("code"), //socialmedia id'li a etiketinin code attribute'u alınıyor.
	'title':jQuery(".productDesc").text().trim(), //productDesc class'ına sahip div'in text'i alınıyor.
	'url': (jQuery)('link[rel="canonical"]').attr("href"),
	'image':(jQuery)('.galleryImg').attr('src'), //galleryImg class'ının src attribute'u alınıyor.
	'categories': (jQuery)('meta[name="sgm:pageCat"]').attr("content").split(">"), //name'i sgm:pageCat olan meta'nın content attribute'u alınıp > işaretine göre split ediliyor.
	'price': ((jQuery)('#product-item div.productPrices span.newPrice').text().trim().replace(',', '.').split(/\s+/))[0], // id'si product-item,div class'ı productPrices, span class'ı newPrice olan elemente ulaşılıyor. "," yerine "." konuluyor. split; regex ile sağlanıyor.\s sayesinde boşluğa göre split ediliyor.
	'inStock':(jQuery)(".button.block.bg-red.sepete-ekle.urun-detay-sepete-ekle").is(":visible"), //class'ı verilen button'un visibility'si kontrol ediliyor. visible ise true dönüyor.
	'brand':(jQuery)(".productTitle").text().trim(), //class'ı productTitle olan elementin text'i alınıp trim ile boşlukları temizleniyor.
	'gender':(jQuery)("td[data-attr='cinsiyet']").text().trim(), //data-attr değeri 'cinsiyet' olan td elementinin text'i alınıyor.
	'labels':label,
	'sizes': size,
	'colors': color,
	'productUrl':(jQuery)('link[rel="canonical"]').attr("href")
}
return pr;
}
       