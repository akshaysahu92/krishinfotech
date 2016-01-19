// to add padding-top so tht it will scroll at exact position
var paddingAddedTo = null;
var paddingBefore = null;
function clicked(seleected){
	var id = $(seleected).attr( "href" );
	//  alert(id);
	paddingAddedTo = id;
	
	$(id).css({"padding-top" : "150px"} );
	var divScrollTop = $(paddingAddedTo).position().top;
	var windowScrollTop = $(".banner").position().top;
	//alert("divScrollTop"+divScrollTop+"--windowScrollTop"+windowScrollTop);
}
$(window).scroll(function() {
	var divScrollTop = $(paddingAddedTo).position().top;
	var windowScrollTop = $(paddingAddedTo).scrollTop();
	console.log(divScrollTop);
	if(divScrollTop>81 && divScrollTop<79){
		$(paddingAddedTo).css({"padding-top" : "40px"} );
	}
});