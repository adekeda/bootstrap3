//event pada saat link di link
$(".page-scroll").on ("click",function(e){

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen
    var elemenTujuan = $(tujuan);
    
   $("html,body").animate({
       scrollTop : elemenTujuan.offset().top -50
   },1250,"easeInOutExpo");
    
    e.preventDefault();
});