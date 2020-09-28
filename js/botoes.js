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
    var FalasJu = ["Parabéns Lu, desejo tudo de bom para você!", "Ohana", "Aniversários são muitos importantes", "Toddy é melhor que Nescau"];
    var FalasLa = ["Experlliarmus", "wingardium leviosa"];
    var FalasYa = ["O importante é o que importa", "Sempre confie em seu espírito", "As vezes corações frio só precisa de um sorriso quente", "A cada passo uma nova jornada"];
    var FalasHo = ["1. O começo...","Campinas, 17 de outubro de 1995 uma bebê de olhos castanhos claros, sobre sua cabeça fios castanhos, chorava desorientada, com tudo.", "Nasce ali a segunda filha de um lindo casal, Luciana e José Luis, Desde cedo seu sorriso contagiava a todos em sua volta.",
    "Sua mãe a nomeou Luísa, a guerreira gloriosa, com o passar dos anos a criança ganhou grande apreço por livros e pela", "Cultura Geek, houve grandes momentos em sua vida, a formatura do Ensino médio, do curso de confeitaria, caligrafia,", "Do curso de inglês ou daquela vez que derrotou o alfaiate no The Witcher 2. Assim como todos também teve seus baixos,",
    "Mas conseguiu superar tudo com a sua força de vontade e ajuda da sua família, hoje é ainda mais incrível e especial que ontem.","Tenho muito orgulho por estar contado um resumo da vida dela minha amada dona, Luísa, Feliz aniversário!!!!", "Fim!"];
    var FalasLu = ["Hmm?", "Hmm...", "Hmm!", "Fuck"];
    var FalasSa = ["Miau!", "Miau..."];
    var FalasCa = ["Qual é a fruta favorita do Beethoven?","Ba - na - na - naaaaaa"];
    var FotosJu = ["Fts/JuliaFt1.png","Fts/JuliaFt2.png","Fts/JuliaFt3.png","Fts/JuliaFt4.png","Fts/JuliaFt5.png","Fts/JuliaFt6.png","Fts/JuliaFt7.png","Fts/JuliaFt8.png"]
    var FotosLa = ["Fts/LauraFt1.png","Fts/LauraFt2.png","Fts/LauraFt3.png","Fts/LauraFt4.png"];
    var FotosYa = ["Fts/YagoFt1.png","Fts/YagoFt2.png","Fts/YagoFt3.png","Fts/YagoFt4.png","Fts/YagoFt5.png","Fts/YagoFt6.png","Fts/YagoFt7.png","Fts/YagoFt8.png",];
    var FotosSa = ["Fts/SavicFt1.png","Fts/SavicFt2.png","Fts/SavicFt3.png","Fts/SavicFt4.png"];
    var FotosLu = ["Fts/LuisaFt1.png","Fts/LuisaFt2.png","Fts/LuisaFt3.png","Fts/LuisaFt4.png","Fts/LuisaFt5.png","Fts/LuisaFt6.png","Fts/LuisaFt7.png","Fts/LuisaFt8.png"];
    var FotosHo = ["Fts/HortenciaFt1.png","Fts/HortenciaFt2.png","Fts/HortenciaFt3.png","Fts/HortenciaFt4.png","Fts/HortenciaFt5.png","Fts/HortenciaFt6.png","Fts/HortenciaFt7.png","Fts/HortenciaFt8.png","Fts/HortenciaFt9.png","Fts/HortenciaFt10.png","Fts/HortenciaFt11.png","Fts/HortenciaFt12.png","Fts/HortenciaFt13.png","Fts/HortenciaFt14.png","Fts/HortenciaFt15.png","Fts/HortenciaFt16.png","Fts/HortenciaFt17.png","Fts/HortenciaFt18.png"];
    var FotosCa = ["Fts/CarolFt1.png","Fts/CarolFt2.png"];
    var Musica = ["Musica/OneMoreTime.mp3", "Musica/noise.mp3", "Musica/Monsoon.mp3","Musica/DontJump.mp3"];
    var btnselecionado;
    var i = 0;
    var f= 0;
    var tocando = false;

    BtnV2.addEventListener("click", function(){
        Video.src="https://www.youtube.com/embed/fmI_Ndrxy14"; 
    });
    BtnV.addEventListener("click", function(){
        Video.src="https://www.youtube.com/embed/FGBhQbmPwH8"; 
    });


    BtnMusica.addEventListener("click", function(){
        som.src = Musica[i];
        if (tocando) {
            som.pause();
            tocando = false;

         } else {
            som.play();
            tocando = true;

         } 
     });
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
             }       
        } 
    
    });
    Array.prototype.forEach.call(botoes, function(el) {
        el.addEventListener("click", function(){ //el é o botão que clicou
           Fala.textContent= ""
           btnselecionado = el.id
           i=0;
           f= 0;
           FtEsquerda.src = "img/bolavazia.png";
           FtDireita.src = "img/bolavazia2.png";
           ImgCentro.src= "img/imgvazia.png";
            if(el.id == "btnju" ){
                Pessoa.src="Pessoas/Ju.png"
                            } 
            if(el.id == "btnla" ){
                Pessoa.src="Pessoas/La.png"
            } 
            if(el.id == "btnya"){
                Pessoa.src="Pessoas/Ya.png"
            } 
            if(el.id == "btnho"){
                Pessoa.src="Pessoas/Ho.png"
            } 
            if(el.id == "btnsa"){
                Pessoa.src="Pessoas/Sa.png"
            } 
            if(el.id == "btnlu"){
                Pessoa.src="Pessoas/Lu.png"
            } 
            if(el.id == "btnca"){
                Pessoa.src="Pessoas/Carol.png"
            }
            
        });
    });
  
});              

