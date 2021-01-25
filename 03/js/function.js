    /* Menu responsivo */
$(function(){
    $('.mobile').click(function(){
        $(this).find('ul').slideToggle("slow");
    })
});/*****/

    /* Trocar cor do 'i' */ 
$(function(){
    var contador = 0;

    $('i').click(function(){
        
        if(contador == 0){
            $(this).css('transition-delay','').css('color','#5e42a6');
            contador = 1;
        }else{
            $(this).css('transition-delay','.5s').css('color','white');
            contador = 0;
        }
    });
});/*****/