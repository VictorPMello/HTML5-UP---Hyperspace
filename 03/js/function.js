    /* Menu responsivo */
$(function(){
    $('.mobile').click(function(){
        $(this).find('ul').slideToggle("slow");
    })
});/*****/

    /* Trocar cor do 'i' */ 
$(function(){
    var contador = 0;

    $('.mobile').click(function(){
        
        if(contador == 0){
            $(this).find('i').css('transition-delay','').css('color','#5e42a6');
            contador = 1;
        }else{
            $(this).find('i').css('transition-delay','.5s').css('color','white');
            contador = 0;
        }
    });
});/*****/ 


    /* Menu scroll */ 
$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop}, 1700);
        return true;
    })
});/*****/

    /* Adicionar border-bottom */
$(function(){
    
    $('ul li').click(function(){
        $(this).find('span.border-bottom').removeClass("border-bottom");

        $('span').toggleClass("border-bottom");


        // pedar uma class 1/2/3/4 e aplicar o border-bottom apenas no número correspondente 
    });
});

// descobrir como parar a o click
//var removeSpan = $(this).find('span').remove();
//var  addSpan = $('nav li').prepend($('span'));
// $(this).find('span').removeClass('a')