$(document).ready(function(){
    $('.cart').hide();
    $('.box').hide();
});
$('.fa-cart-shopping').click(function(){
      $('.cart').show();
});
$('.fa-xmark').click(function(){
      $('.cart').hide();
});
$('.box').on('click','.fa-xmark',function(){
      $('.box').remove();
});

$('.cart-content').on('click', '.fa-trash-can', function () {
$('.total-price').hide();
let price = $(this).closest('.cart-box').find('.cart-price').text();
let number = parseInt(price);
total-=number;
$(this).closest('.cart-box').remove();
$('.total').append('<div class="total-price">'+total+'</div>');
});

$('.btn-buy').click( function () {
 $('.cart').hide();
 $('.quantity').hide();
 var el = $('.cart-content').clone();
 var tl = $('.total').clone();
 $('.box').append('<div class="heading"><h2>YOUR PAYMENT SUMMARY</h2><i class="fa-sharp fa-solid fa-xmark"></i></div>');
  $('.box').append(el);
  $('.fa-trash-can').hide();
  $('.box').append(tl);
  $('.btn-buy').hide();
   $('.box').show();
});

total=0;
let name=[];
$('.shop-content').on('click', '.add-cart', function () {
$('.total-price').hide();
let nam =$(this).closest('.product-box').find('.product-title').text();
if($.inArray(nam,name)!= -1){
alert("Already inside cart");
}
else{
let nam =$(this).closest('.product-box').find('.product-title').text();
name.push(nam);
let price = $(this).closest('.product-box').find('.price').text();
image = $(this).closest('.product-box').find('.product-img').attr('src');
let number = parseInt(price);
$('.cart-content').append('<div class="cart-box"><div class="detail-box"><img src='+image+' class="cart-img"><div class="cart-product-title">'+nam+'</div><div class="cart-price">'+price+'</div><input type="number" class="quantity" value="1" min="0"><i class="fa-solid fa-trash-can"></i></div></div>');
total+=number;
}
$('.total').append('<div class="total-price">'+total+'</div>');
});

var quantity=1;
$('.cart-content').on('change', '.quantity', function () {
console.log("hi");
$('.total-price').remove();
console.log(quantity);
let price = $(this).closest('.cart-box').find('.cart-price').text();
let number = parseInt(price);
let quant =(parseInt($(this).closest('.cart-box').find('.quantity').val()));
console.log(quant);
if(quant==0){
total-=number;
$(this).closest('.cart-box').remove();
}
else if (quant< quantity){
total-=number;
quantity =quant;
}
else if(quant =>quantity){
total+=number;
quantity =quant;
}
$('.total').append('<div class="total-price">'+total+'</div>');
});


