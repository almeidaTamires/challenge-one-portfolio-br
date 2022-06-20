//Seu JavaScript de validação aqui
const btn = document.getElementById("btn");

    //validação do campo Nome
    function validateForm() {
        let inputNome = document.getElementById("nome").value;
        if (inputNome === "") {
            alert("O campo Nome deve ser preenchido")
        }
        if (inputNome.length > 50){
            alert("Máximo de 50 caracteres no campo nome")
        }
    }
    //validação do campo email
    function validaEmail() {
        let inputEmail = document.getElementById("email").value;
        if (inputEmail === "") {
            alert("O campo Email deve ser preenchido")
        }
    }
    //validação do campo assunto
    function validaAssunto() {
        let inputAssunto = document.getElementById("assunto").value;
        if (inputAssunto === "") {
            alert("O campo Assunto deve ser preenchido")
        }
        if (inputAssunto.length > 50){
            alert("Máximo de 50 caracteres no campo assunto")
        }
    }

        //validação do campo mensagem
        function validaMensagem() {
            let inputMensagem = document.getElementById("mensagem").value;
            if (inputMensagem === "") {
                alert("O campo mensagem deve ser preenchido")
            }
            if (inputMensagem.length > 300){
                alert("Máximo de 50 caracteres no campo mensagem")
            }
        }





