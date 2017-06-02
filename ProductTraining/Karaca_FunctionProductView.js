function product() {

try{
	var pr={
	//property özelliği og:title olan meta elementinin content'i alınıp boşluğa göre split ediliyor. ve split edilen array'in ilk elemanı alınıyor.
	"brand":(jQuery)('meta[property="og:title"]').attr("content").trim().split(" ").shift(),
	//sabit
	"name": "PRODUCT_VIEW",
	//property özelliği og:image olan meta elementinin content'i alınıyor.
	'image':(jQuery)('meta[property="og:image"]').attr("content"),
	//itemtype'ı http://schema.org/Offer olan div'in del elementinin text'i alınıyor, boşluğa göre split edilip ilk elemen alınıyor.
	"oldPrice":(jQuery)('div[itemtype="http://schema.org/Offer"] del').text().trim().split(" ").shift(),
	//rel değeri canonical'a eşit linkin href attribute'u alınıyor.
	'pageUrl':(jQuery)('link[rel="canonical"]').attr("href"), 
	//id'si addcart olan butonun visibility'sine bakılıyor.
	'inStock':(jQuery)('#addcart').is(":visible"),
	//itemprop değeri price olan p elementinin text'i boşluğa göre split ediliyor ve ilk eleman alınıyor.
	'price': (jQuery)('p[itemprop="price"]').text().trim().split(" ").shift(), 
	'productUrl':(jQuery)('link[rel="canonical"]').attr("href"),
	'url': (jQuery)('link[rel="canonical"]').attr("href"),


	}
return pr;
} 
catch(err){
	window.Err=err;
}
}
       