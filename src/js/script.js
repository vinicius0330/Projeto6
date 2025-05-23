//CARREGAR A PÁGINA
document.addEventListener('DOMContentLoaded',()=>{
    //DECLARANDO AS VARIAVEIS COM DOM
    const videoContainer =document.querySelector('.video-container');
    const loginContainer =document.querySelector('.login-container');
    const formLogin =document.getElementById('form-login');
    const botaoEntrar =document.getElementById('btnEntrar');
    const botaoSair =document.getElementById('btnTrocar');
    const mensagem = document.getElementById('mensagem');
    
    
    //VERIFICAR SE EXISTE UM USUARIO LOGADO NO LOCALSTORAGE
    const usuarioLogado = localStorage.getItem('usuario');
    const senhaLogado = localStorage.getItem('senha');
    
    //VERIFICA SE O USUARIO E SENHA SÃO VALIDOS APRESENTA AS MENSAGENS
    
    if(usuarioLogado && senhaLogado){
        if(formLogin){
            formLogin.style.display='none'
        
        }
        if(mensagem){
            mensagem.textContent =`Bem vindo(a), ${usuarioLogado}`;
            mensagem.className="mensagem sucesso";
        }
    }
    if(formLogin){
        formLogin.addEventListener('submit',(e)=>{
            //evita o formulario de executar qualquer ação antes finalizar a função
            e.preventDefault();
    
            const username =document.getElementById('usuario').value;
            const password =document.getElementById('senha').value;
    
            if(username == "Admin" && password =="123456"){

                let token = Math.random().toString(16).substring(2);
    
                window.location="teste.html";
    
                if(mensagem){
                    mensagem.textContent ='Login realizado com sucesso';
                    mensagem.className="mensagem sucesso";
    
                //PEGANDO O USUARIO E A SENHA E GRAVANDO NO LOCALSTORAGE
                localStorage.setItem('usuario',username);
                localStorage.setItem('senha',token)
                }
            }
            else{
            if(mensagem){
                mensagem.textContent ='Usuario e senha inválidos';
                mensagem.className="mensagem error";
            }
        }
        formLogin.reset();
        })
    }
    
    //EVENTO PARA TROCAR O VIDEO DE LUGAR
    if(botaoSair)
        {
            botaoSair.addEventListener('click',()=>{
                const videoOrdem = window.getComputedStyle(videoContainer).order;
                videoContainer.style.order =window.getComputedStyle(loginContainer).order;
                loginContainer.style.order =videoOrdem;
            })
        }
    
        //faz o logoff e revome o usuario da sessão
    
        if(botaoSair && mensagem){
            botaoSair.addEventListener('click',()=>{
                localStorage.removeItem('usuario');
                localStorage.removeItem('senha');
                mensagem.textContent ='Logoff realizado com sucesso';
                mensagem.className ='mensagem sucesso';
                //ao fazer logoff em 1 minuto e meio ele volta para o login
                setTimeout(()=>{
                    window.location.href ="index.html"
                },1500)
            })
        }
    });
    