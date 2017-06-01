function product() {
var categories=[];
try{
categories.push((jQuery)('ul[class="breadcrumbs product-breadcrumb"] li').eq(-3).text());
categories.push((jQuery)('ul[class="breadcrumbs product-breadcrumb"] li').eq(-2).text());

}
catch(err){
	window.Err=err;
}
try{
	var pr={
	"brand":(jQuery)('#logo a').attr("title"),
	"categories":categories,
	"category": (jQuery)('ul[class="breadcrumbs product-breadcrumb"] li').eq(-3).text()+">"+(jQuery)('ul[class="breadcrumbs product-breadcrumb"] li').eq(-2).text(),
	"name": "PRODUCT_VIEW", 
	'image':jQuery("#thumblist li.active-thumb a img" ).attr("src"),
	'pageUrl':(jQuery)('link[rel="canonical"]').attr("href"), 
	'inStock':(jQuery)('div[class="p-add-basket"] button[class="btn-add-basket p-detail-add-basket"]').is(":visible"),
	'price': (jQuery)('meta[property="product:price:amount"]').attr("content").trim().replace(',', '.').split(" ")[0], 
	'productId':(jQuery)('.p-alternative ul').attr("data-id"),
	'title':(jQuery)('meta[property="og:title"]').attr("content").split(/ (.+)/)[1],
	'url': (jQuery)('link[rel="canonical"]').attr("href") 

	}
return pr;
} 
catch(err){
	window.Err=err;
}
}
       