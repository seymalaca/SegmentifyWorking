function product() {
var size=[];
var color=[];
jQuery('#product_addtocart_form label').each(function() { //id'si product_addtocart_form olan element'in tüm label'larına bakılıyor.
            
                if(jQuery(this).attr('class')!="notsalable") { //bakılanlar'ın class attribute'u notsalable'a eşit değilse alt satırdaki kod çalışıyor.
                  size.push(jQuery(this).find('.size-number').text().trim()); //class'ı size-number olanlar "size" adlı yukarıda oluşturduğum değişkene ekleniyor.
                }

              
            });

jQuery('.opt_renk a').each(function() { //opt_renk class'ında ve a etiketi altında olan her bir elemente bakılıyor.
          
                color.push(jQuery(this).attr('title')); //her element'in title'ı yukarıda oluşturduğum color adlı değişkene ekleniyor.
              
            });
	var pr={
	"name": "PRODUCT_VIEW",
	'pageUrl':(jQuery)('link[rel="canonical"]').attr("href"),
	'"productId':(jQuery)('#socialmedia a').attr("code"),
	'title':jQuery(".productDesc").text().trim(),
	'url': (jQuery)('link[rel="canonical"]').attr("href"),
	'image':(jQuery)('.galleryImg').attr('src'),
	'categories': (jQuery)('meta[name="sgm:pageCat"]').attr("content").split(">"),
	'price': ((jQuery)('#product-item div.productPrices span.newPrice').text().trim().replace(',', '.').split(/\s+/))[0],
	'inStock':(jQuery)(".button.block.bg-red.sepete-ekle.urun-detay-sepete-ekle").is(":visible"),
	'brand':(jQuery)(".productTitle").text().trim(),
	'gender':(jQuery)("td[data-attr='cinsiyet']").text().trim(),
	'labels':(jQuery)("table[class='amlabel-table top-center']"),
	'sizes': size,
	'colors': color,
	'productUrl':(jQuery)('link[rel="canonical"]').attr("href")
}
return pr;
}
       
