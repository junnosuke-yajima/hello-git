$(function(){
    $(window).scroll(function(){
        var jaPos =$('#japan-wrapper').offset().top - 300;
        var scr_count = $(window).scrollTop();
        console.log(jaPos);
        console.log(scr_count);
        if(scr_count > jaPos){
            $('#japImg').addClass('japan-show');
            $('#japImg').removeClass('japan-hide');
        }
    });
    $(window).scroll(function(){
        var ukPos =$('#london-wrapper').offset().top - 300;
        var scr_count = $(document).scrollTop();
        console.log(ukPos);
        console.log(scr_count);
        if(scr_count > ukPos){
            $('#ukImg').addClass('uk-show');
            $('#ukImg').removeClass('uk-hide');
        }
    });
    $(window).scroll(function(){
        var usaPos =$('#usa-wrapper').offset().top - 300;
        var scr_count = $(document).scrollTop();
        console.log(usaPos);
        console.log(scr_count);
        if(scr_count > usaPos){
            $('#usaImg').addClass('usa-show');
            $('#usaImg').removeClass('usa-hide');
        }
    });

});