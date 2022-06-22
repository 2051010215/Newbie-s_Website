// Cố định thanh menu
window.onscroll = function() {myFunction()};
var navbar = document.getElementsByClassName("menu");
var sticky = navbar[0].offsetTop;
function myFunction(){
    if (window.pageYOffset >= sticky) {
        navbar[0].classList.add("sticky");
        } else {
        navbar[0].classList.remove("sticky");
        }
}

//Phản hồi qua mail
function email(){
    var a = document.getElementById("input").value;
    if (a == 0){
        alert("Xin hãy nhập địa chỉ email của bạn!!!");
    }else{
        alert("Chúng tôi đã nhận được E-mail "+ a + " của bạn!\n\nCảm ơn bạn. Chúc một ngày tốt lành <3");    
    }
}

//Back to top button
$(document).ready(function(){
    $("#BackToTop").hide()
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 500)
            $("#BackToTop").show("slow")
        else 
            $("#BackToTop").hide("slow")
    })
    $("#BackToTop").click(function(){
        $("html, body").animate({
            scrollTop: 20
        }, 700);
    })

})
