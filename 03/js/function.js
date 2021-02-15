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
    $('nav ul li').click(function(){
        var idx = $(this).index(); // pega a posição da li

            $('ul li').find('span.border-bottom').removeClass('border-bottom');
            
            $('li').eq(idx).find('span').addClass('border-bottom');    
    });
});

// descobrir como parar a o click
//var removeSpan = $(this).find('span').remove();
//var  addSpan = $('nav li').prepend($('span'));
// $(this).find('span').removeClass('a')

/* var contador = 0;
            $(this).each(function(){
                if (contador == 0) {
                    $(this).Class('border-bottom');
                    $(this).find('span').addClass("no-border"); 
                    console.log('estou aqui 1');
                    contador = 1;
                } else {
                    $(this).find('span').addClass('border-bottom');
                    $(this).find('span').removeClass("no-border");
                    console.log('estou aqui 2');
                    contador = 0;
                }
            });
 */
// $(this).find('span.border-bottom').removeClass("border-bottom");
        //*Usar este* pegar uma class 1/2/3/4 e aplicar o border-bottom apenas no número correspondente 