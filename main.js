
$(document).ready(function() {
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

$('#telefone').mask('(00) 00000-0000')
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        
    },
    messages: {
        nome:'Por favor, insira seu nome'
    },
    messages: {
        telefone:'Por favor, insira seu telefone'
    },
    messages: {
        email:'Por favor, insira seu email'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})

    $('.lista-produtos button').click(function() {
        const destino = $('#contato')
        const listaProdutos = $(this).parent().find('h3').text();

        $('#listaProdutos').val(nomeProduto);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
