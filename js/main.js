$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000')
    $('#cep').mask('00000-000')
    $('#cpf').mask('000-000-000-00')

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            cep:{
                required: true,
            },
            endereco:{
                required: true,
            },
            cpf:{
                required: true,
            }
        },
        messages:{
        nome:'Por favor, insira seu nome',
            email:'Por favor, insira seu email',
            telefone:'Por favor, insira seu telefone',
            cep:'Por favor, insira o cep',
            endereco:'Por favor, insira o endereço',
            cpf:'Por favor, insira seu cpf'
        }
})
})