function product() {
var categories=[];
try{
//class'ı breadcrumbs product-breadcrumb olan elementlerin li elementlerinden sonran bir ve iki eksik olana bakılıyor. Her zaman son li elementi ürünün olduğu sayfayı gösterdiği için bu yolu seçtim.
categories.push((jQuery)('ul[class="breadcrumbs product-breadcrumb"] li').eq(-3).text());
categories.push((jQuery)('ul[class="breadcrumbs product-breadcrumb"] li').eq(-2).text());

}
catch(err){
	window.Err=err;
}
try{
	var pr={
	// logo id'li elementin a elementinin title değeri alınıyor.
	"brand":(jQuery)('#logo a').attr("title"),
	//Yukarıda oluşturulan categories atanıyor.
	"categories":categories,
	//categories kısmında bulunan kategoriler ">" işareti ile birleştirilip category değerine atanıyor.
	"category": (jQuery)('ul[class="breadcrumbs product-breadcrumb"] li').eq(-3).text()+">"+(jQuery)('ul[class="breadcrumbs product-breadcrumb"] li').eq(-2).text(),
	//sabit
	"name": "PRODUCT_VIEW", 
	//id'si thumblis olan elementin active thumb class'ına sahip li elementinin a elementindeki img'sine bakılıyor. img'nin src değeri alınıyor.
	'image':jQuery("#thumblist li.active-thumb a img" ).attr("src"),
	//rel değeri canonical'a eşit linkin href attribute'u alınıyor.
	'pageUrl':(jQuery)('link[rel="canonical"]').attr("href"), 
	//Sepete ekle butonunun visibility'si kontrol ediliyor.
	'inStock':(jQuery)('div[class="p-add-basket"] button[class="btn-add-basket p-detail-add-basket"]').is(":visible"),
	//property değeri product:price:amount'a eşit olan meta elementinin content attribute'u alınıyor. virgül noktaya çevriliyor. boşluğa göre split edilip ilk değer alınıyor.
	'price': (jQuery)('meta[property="product:price:amount"]').attr("content").trim().replace(',', '.').split(" ")[0], 
	//class'ı p-alternative'e eşit olan u elementinin data-id attribute'u alınıyor.
	'productId':(jQuery)('.p-alternative ul').attr("data-id"),
	//property değeri og:title'a eşit olan meta elementinin content'i alınıyor, ilk boşluğa göre string bölünüyor ve ikinci elemanı alınıyor.SS
	'title':(jQuery)('meta[property="og:title"]').attr("content").split(/ (.+)/)[1],
	'url': (jQuery)('link[rel="canonical"]').attr("href") 

	}
return pr;
} 
catch(err){
	window.Err=err;
}
}
       