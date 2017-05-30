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
	'pageUrl':(jQuery)('link[rel="canonical"]').attr("href"),
	'"productId':(jQuery)('#socialmedia a').attr("code"),
	'title':jQuery(".productDesc").text().trim(),
	'url': (jQuery)('link[rel="canonical"]').attr("href"),
	'image':(jQuery)('.galleryImg').attr('src'),
	'categories': (jQuery)('meta[name="sgm:pageCat"]').attr("content").split(">"),
	'price': ((jQuery)('#product-item div.productPrices span.newPrice').text().trim().replace(',', '.').split(/\s+/))[0],
	'inStock':(jQuery)(".button block bg-red sepete-ekle urun-detay-sepete-ekle sp-goal-672-c308-22-1492031008114").is(":visible"),
	'brand':(jQuery)(".productTitle").text().trim(),
	'gender':(jQuery)("td[data-attr='cinsiyet']").text().trim(),
	'labels':(jQuery)("table[class='amlabel-table top-center']"),
	'sizes': size,
	'colors': color,
	'productUrl':(jQuery)('link[rel="canonical"]').attr("href")
}
return pr;
}
       