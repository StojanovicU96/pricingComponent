var paymentType = "month";
var priceArr = [8,12,16,24,36];

//setting a payment type (monthly/yearly)
$(".billing-slider").on("click", function(){
    if(paymentType === "month"){
        $(".payment-type").text("/year");
        $("#value").text(priceArr[$("#myRange").val()]*9);
        paymentType = "year";
    }else{
        $(".payment-type").text("/month");
        $("#value").text(priceArr[$("#myRange").val()]);
        paymentType = "month";
    }
});

//setting a price value depending on payment type
$("#myRange").on("change", function(){
    if(paymentType === "month"){
        $("#value").text(priceArr[$("#myRange").val()]);
    }else{
        $("#value").text(priceArr[$("#myRange").val()]*9);
    }
});

