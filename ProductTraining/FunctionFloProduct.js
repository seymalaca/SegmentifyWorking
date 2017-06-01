function product() {
var size=[],color=[],label=[],gender;
try{
//data-attr değeri 'cinsiyet' olan td elementinin text'i alınıyor ve gerekli kontroller if else yapısı ile sağlanıyor.
if((jQuery)("td[data-attr='cinsiyet']").text().trim()=="Kadın")gender="F";
else if((jQuery)("td[data-attr='cinsiyet']").text().trim()=="Erkek")
gender="M";
else if((jQuery)("td[data-attr='cinsiyet']").text().trim()=="Unisex")
gender="U";
}
catch(err){
	window.Err=err;
}
try{
//class'ı amlabel-table olanların tüm td'lerine bakılıyor.
jQuery('.amlabel-table td').each(function() {
//bakılanların trim() ile boşlukları temizleniyor. alınan string regex kullanılarak "/" ve "." karakterlerine göre split ediliyor. bu durumda string'deki ".png"den sonrası son eleman oluyor.bunu kaldırıp ".png"den öncesini almak için; splice içindeki -2 sayesinde sondan bir önceden başlanıyor, splice içindeki 1 sayesinde bir tane eleman siliniyor. pop ile de son elemana ulaşılıyor. gerekli kontroller if else yapısı ile sağlanıyor.
					
                if((jQuery(this).attr('style').trim().split(/[/.]/).splice(-2,1).pop())=="00yeni_2")
                	label.push("Yeni");
				else if((jQuery(this).attr('style').trim().split(/[/.]/).splice(-2,1).pop())=="0internete_ozel")  
              		label.push("İnternete Özel");


              
            });
}
catch(err){
	window.Err=err;
}
try{
//id'si product_addtocart_form olan element'in tüm label'larına bakılıyor.
jQuery('#product_addtocart_form label').each(function() { 
//bakılanların class attribute'u notsalable'a eşit değilse alt satırdaki kod çalışıyor.            
                if(jQuery(this).attr('class')!="notsalable") { 
//class'ı size-number olanlar "size" adlı yukarıda oluşturduğum değişkene ekleniyor.
                  size.push(jQuery(this).find('.size-number').text().trim()); 
                }

              
            });
}
catch(err){
	window.Err=err;
}
try{
 //opt_renk class'ında ve a etiketi altında olan her bir elemente bakılıyor.
jQuery('.opt_renk a').each(function() {
  //her element'in title'ı yukarıda oluşturduğum color adlı değişkene ekleniyor.         
                color.push(jQuery(this).attr('title'));
              
            });
}
catch(err){
	window.Err=err;
}
	var pr={
	//sabit
	"name": "PRODUCT_VIEW", 
	//rel değeri canonical'a eşit linkin href attribute'u alınıyor.
	'pageUrl':(jQuery)('link[rel="canonical"]').attr("href"), 
	//socialmedia id'li a etiketinin code attribute'u alınıyor.
	'"productId':(jQuery)('#socialmedia a').attr("code"), 
	//productDesc class'ına sahip div'in text'i alınıyor.
	'title':jQuery(".productDesc").text().trim(), 
	'url': (jQuery)('link[rel="canonical"]').attr("href"),
	//galleryImg class'ının src attribute'u alınıyor.
	'image':(jQuery)('.galleryImg').attr('src'), 
	//name'i sgm:pageCat olan meta'nın content attribute'u alınıp > işaretine göre split ediliyor.
	'categories': (jQuery)('meta[name="sgm:pageCat"]').attr("content").split(">"), 
	// id'si product-item,div class'ı productPrices, span class'ı newPrice olan elemente ulaşılıyor. "," yerine "." konuluyor. 
	//split; regex ile sağlanıyor.\s sayesinde boşluğa göre split ediliyor.
	'price': ((jQuery)('#product-item div.productPrices span.newPrice').text().trim().replace(',', '.').split(/\s+/))[0],
	//class'ı verilen button'un visibility'si kontrol ediliyor. visible ise true dönüyor. 
	'inStock':(jQuery)(".button.block.bg-red.sepete-ekle.urun-detay-sepete-ekle").is(":visible"), 
	//class'ı productTitle olan elementin text'i alınıp trim ile boşlukları temizleniyor.
	'brand':(jQuery)(".productTitle").text().trim(), 
	//data-attr değeri 'cinsiyet' olan td elementinin text'i alınıyor.
	'gender':gender, 
	'labels':label,
	'sizes': size,
	'colors': color,
	'productUrl':(jQuery)('link[rel="canonical"]').attr("href")
}
return pr;
}
       