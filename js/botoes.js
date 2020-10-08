document.addEventListener("DOMContentLoaded", function(){  // Só vai rodar Js quando a pagina carregar
    var botoes = document.getElementsByClassName("btnPessoa");
    var Pessoa = document.getElementById("CorpoTd");
    var botaoavanca = document.getElementById("BtnAvanca");
    var FtDireita = document.getElementById("FtDireita");
    var FtEsquerda = document.getElementById("FtEsquerda");
    var ImgCentro = document.getElementById("ImgCentro");
    var BtnMusica = document.getElementById("Gato");
    var Fala = document.getElementById("falas");
    var som = document.getElementById("audio");
    var Video = document.getElementById("vd");
    var BtnV = document.getElementById("btnla2");
    var BtnV2 = document.getElementById("btnya2");
    var name = document.querySelector(".caixatexto");
    var FalasJu = ["Parabéns Lu, desejo tudo de bom para você!", "Ohana", "Aniversários são muitos importantes", "Toddy é melhor que Nescau"];
    var FalasLa = ["Experlliarmus", "wingardium leviosa"];
    var FalasYa = ["Feliz aniversário Lu! Desejo a você muitos anos de vida, paz e amor. Espero que nesse seu 25º aniversário você consiga conquistar tudo o que sempre quis e sonhou.", "Seu querido parceiro, amigo, amante e eterno admirador vai estar sempre com você em todos os momentos que precisar.❤️", "Um grande abraço e um beijo com todo o amor e carinho que você conquistou de mim, minha eterna inspiração.  ❤️ Amo muito você! ❤️", "E eu não sou fofo!"];
    var FalasHo = ["1. O começo...","Campinas, 17 de outubro de 1995 uma bebê de olhos castanhos claros, sobre sua cabeça fios castanhos, chorava desorientada, com tudo.", "Nasce ali a segunda filha de um lindo casal, Luciana e José Luis, Desde cedo seu sorriso contagiava a todos em sua volta.",
    "Sua mãe a nomeou Luísa, a guerreira gloriosa, com o passar dos anos a criança ganhou grande apreço por livros e pela", "Cultura Geek, houve grandes momentos em sua vida, a formatura do Ensino médio, do curso de confeitaria, caligrafia,", "Do curso de inglês ou daquela vez que derrotou o alfaiate no The Witcher 2. Assim como todos também teve seus baixos,",
    "Mas conseguiu superar tudo com a sua força de vontade e ajuda da sua família, hoje é ainda mais incrível e especial que ontem.","Tenho muito orgulho por estar contado um resumo da vida dela minha amada dona, Luísa, Feliz aniversário!!!!", "Fim!"];
    var FalasLu = ["Hmm?", "Hmm...", "Hmm!", "Fuck"];
    var FalasSa = ["Miau!", "Miau..."];
    var FalasCa = ["Oi Lu, menina primeiro de tudo eu queria te desejar um maravilhoso aniversário de quarentena!! acho que a gente nunca iria imaginar que isso aconteceria, ","mas já que estamos aqui, que ele seja tão bom quanto os outros. Quero te desejar também tudo de bom desse mundo e toda a felicidade, umas terapia pra enfrentar seja lá ", "o que é isso que a gente tá passando agora 😫 e que você conquiste tudo o que quer. Queria aproveitar pra dizer que você sempre foi uma amiga maravilhosa","a gente se conhece a muitos anos e apesar de morarmos longe e de ter perdido o contrato por um certo tempo, eu fico muito feliz de que a gente voltou a conversar e ", "que continuamos sendo amiguinhas, podendo falar sobre qualquer coisa, literalmente, a gente tem umas conversa aleatória que são boas demais KKKK.", "Obrigada pelo apoio que você vem me dado e eu só espero estar retribuindo tudo isso, quero que saiba que você é muito importante pra mim, sempre foi, e que vou estar aqui pra você se precisar ou não. ", "Pode falar comigo sobre o que quiser, to sempre aí pra ouvir ❤️ Parabéns de novo, amo muito você e tô com saudades, espero te ver em breve."];
    var FotosJu = ["Fts/JuliaFt1.png","Fts/JuliaFt2.png","Fts/JuliaFt3.png","Fts/JuliaFt4.png","Fts/JuliaFt5.png","Fts/JuliaFt6.png","Fts/JuliaFt7.png","Fts/JuliaFt8.png"]
    var FotosLa = ["Fts/LauraFt1.png","Fts/LauraFt3.png","Fts/LauraFt5.png","Fts/LauraFt6.png"];
    var FotosYa = ["Fts/YagoFt1.png","Fts/YagoFt2.png","Fts/YagoFt3.png","Fts/YagoFt4.png","Fts/YagoFt5.png","Fts/YagoFt6.png","Fts/YagoFt7.png","Fts/YagoFt8.png",];
    var FotosSa = ["Fts/SavicFt1.png","Fts/SavicFt2.png","Fts/SavicFt3.png","Fts/SavicFt4.png"];
    var FotosLu = ["Fts/LuisaFt1.png","Fts/LuisaFt9.png","Fts/LuisaFt3.png","Fts/LuisaFt2.png","Fts/LuisaFt5.png","Fts/LuisaFt6.png","Fts/LuisaFt7.png","Fts/LuisaFt8.png"];
    var FotosHo = ["Fts/HortenciaFt1.png","Fts/HortenciaFt2.png","Fts/HortenciaFt3.png","Fts/HortenciaFt4.png","Fts/HortenciaFt5.png","Fts/HortenciaFt6.png","Fts/HortenciaFt7.png","Fts/HortenciaFt8.png","Fts/HortenciaFt9.png","Fts/HortenciaFt10.png","Fts/HortenciaFt11.png","Fts/HortenciaFt12.png","Fts/HortenciaFt13.png","Fts/HortenciaFt14.png","Fts/HortenciaFt15.png","Fts/HortenciaFt16.png","Fts/HortenciaFt17.png","Fts/HortenciaFt18.png"];
    var FotosCa = ["Fts/CarolFt1.png","Fts/CarolFt2.png","Fts/CarolFt3.png","Fts/CarolFt4.png","Fts/CarolFt5.png","Fts/CarolFt6.png","Fts/CarolFt7.png","Fts/CarolFt8.png"];
    var Musica = ["Musica/OneMoreTime.mp3", "Musica/noise.mp3", "Musica/Monsoon.mp3","Musica/DontJump.mp3","Musica/Giants.mp3","Musica/Awaken.mp3"];
    var MusicaCa ="Musica/Xuxa.mp3";
    var btnselecionado;
    var resp = document.getElementById("resposta");
    var respbtn = document.getElementById("respostabtn");
    var modal = document.getElementById("myModal");
    

    var m = 0;
    var i = 0;
    var f= 0;
    var tocando = false;
    var erros = 0;
    respbtn.addEventListener("click", function(){ //Fechar o modal 
        animacao.style.opacity="1";  
        let certo = document.querySelector(".certa");
        let errado = document.querySelector(".errada");
        certo.classList.toggle("rodando");
        errado.classList.toggle("rodando");

        if(resp.value=="42"){    
           
            setTimeout(() => {
                certo.classList.toggle("rodando");
                errado.style.opacity="0";
                certo.style.opacity="1";
                errado.classList.toggle("rodando");
                setTimeout(() => {
                    modal.style.opacity="0";
                    modal.style.pointerEvents='none';
                    tudo.style.opacity= "1";
                }, 1000);
            }, 1000);

        }else{
            erros++;
            setTimeout(() => {
                certo.classList.toggle("rodando");
                certo.style.opacity="0";
                errado.classList.toggle("rodando");
                erros=(erros>3)?3:erros;
                document.querySelector(".img-error").setAttribute("src","img/fail"+ erros +".gif");
            }, 1000);
               
            
        }

    });

     //Botões para a troca de vídeo
    BtnV2.addEventListener("click", function(){
        Video.src="https://www.youtube.com/embed/YcPuu_XRkGY"; 
    });
    BtnV.addEventListener("click", function(){
        Video.src="https://www.youtube.com/embed/FGBhQbmPwH8"; 
    });

    //Tocar som
    BtnMusica.addEventListener("click", function(){
        som.src = Musica[m];
        console.log(Musica[m])
        if (tocando) {
            som.pause();
            tocando = false;

         } else {
            som.play();
            tocando = true;
            m++;
            if(m > 5){
                m = 0;
            }
         } 
     });

    //Falas
    botaoavanca.addEventListener("click", function(){
        if(btnselecionado == "btnju" ) {
            Fala.textContent= FalasJu[i];
            i++;
            if(f<FotosJu.length){
            FtEsquerda.src = FotosJu[f];
            f++;
            FtDireita.src = FotosJu[f];
            f++;
            }
            ImgCentro.src= "img/JuliaSimbolo.png"
            if(i > FalasJu.length){
                i=0;
             }      
        }
    
        if(btnselecionado == "btnla" ) {
            Fala.textContent=FalasLa[i];
            i++;
            if(f<FotosLa.length){
                FtEsquerda.src = FotosLa[f];
                f++;
                FtDireita.src = FotosLa[f];
                f++;
            } 
            ImgCentro.src= "img/LauraSimbolo.png"
            if(i > FalasLa.length){
                i=0;
             }      
        }

        
        if(btnselecionado == "btnya" ) {
            Fala.textContent=FalasYa[i];
            i++;
            if(f<FotosYa.length){
                FtEsquerda.src = FotosYa[f];
                f++;
                FtDireita.src = FotosYa[f];
                f++;
            } 
            ImgCentro.src= "img/YagoSimbolo.png"
            if(i > FalasYa.length){
                i=0;
             }       
        } 

        if(btnselecionado == "btnho" ) {
            Fala.textContent=FalasHo[i];
            i++;
            if(f<FotosHo.length){
                FtEsquerda.src = FotosHo[f];
                f++;
                FtDireita.src = FotosHo[f];
                f++;
            } 
            ImgCentro.src= "img/HortenciaSimbolo.png"
            if(i > FalasHo.length){
                i=0;
             }        
        } 

        if(btnselecionado == "btnsa" ) {
            Fala.textContent=FalasSa[i];
            i++;
            if(f<FotosSa.length){
                FtEsquerda.src = FotosSa[f];
                f++;
                FtDireita.src = FotosSa[f];
                f++;
            } 
            ImgCentro.src= "img/SavicSimbolo.png"
            if(i > FalasSa.length){
                i=0;
             }        
        } 

        if(btnselecionado == "btnlu" ) {
            Fala.textContent=FalasLu[i];
            i++;
            if(f<FotosLu.length){
                FtEsquerda.src = FotosLu[f];
                f++;
                FtDireita.src = FotosLu[f];
                f++;
            } 
            ImgCentro.src= "img/LuisaSimbolo.png"
            if(i > FalasLu.length){
                i=0;
             }       
        } 
        if(btnselecionado == "btnca" ) {
            Fala.textContent=FalasCa[i];
            i++;
            if(f<FotosCa.length){
                FtEsquerda.src = FotosCa[f];
                f++;
                FtDireita.src = FotosCa[f];
                f++;
            }
            ImgCentro.src= "img/CarolSimbolo.png"
            if(i > FalasCa.length){
                i=0;
                som.pause();
             }       
        } 
    
    });

    //Troca de imgs e personagens
    Array.prototype.forEach.call(botoes, function(el) {
        el.addEventListener("click", function(){ //el é o botão que clicou
           Fala.textContent= ""
           btnselecionado = el.id
           i=0;
           f= 0;
           FtEsquerda.src = "img/Bolavazia.png";
           FtDireita.src = "img/Bolavazia2.png";
           ImgCentro.src= "img/imgvazia.png";
            if(el.id == "btnju" ){
                Pessoa.src="Pessoas/Ju.png"
                name.setAttribute("data-content", "Julia");

                            } 
            if(el.id == "btnla" ){
                Pessoa.src="Pessoas/La.png"
                name.setAttribute("data-content", "Laura");

            } 
            if(el.id == "btnya"){
                Pessoa.src="Pessoas/Ya.png"
                name.setAttribute("data-content", "Yago");
           
            } 
            if(el.id == "btnho"){
                Pessoa.src="Pessoas/Ho.png"
                name.setAttribute("data-content", "Hortência");

            } 
            if(el.id == "btnsa"){
                Pessoa.src="Pessoas/Sa.png"
                name.setAttribute("data-content", "Savic");

            } 
            if(el.id == "btnlu"){
                Pessoa.src="Pessoas/Lu.png"
                name.setAttribute("data-content", "Luísa");

            } 
            if(el.id == "btnca"){
                Pessoa.src="Pessoas/Carol.png"
                name.setAttribute("data-content", "Boné");
                som.src = MusicaCa;
                som.currentTime = 40;
                som.volume = 0.2;
                som.play();
            }
        });
    });
  
});   


