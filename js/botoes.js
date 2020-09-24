document.addEventListener("DOMContentLoaded", function(){  // Só vai rodar Js quando a pagina carregar
    var botoes = document.getElementsByClassName("btnPessoa");
    var Pessoa = document.getElementById("CorpoTd");
    var botaoavanca = document.getElementById("BtnAvanca");
    var FtDireita = document.getElementById("FtDireita");
    var FtEsquerda = document.getElementById("FtEsquerda");
    var ImgCentro = document.getElementById("ImgCentro");
    var estado="ngm";
    var FalasJu = ["Parabéns Lu, desejo tudo de bom para você!", "Isso é só um teste", "Acho que agora foi"];
    var FalasLa = ["Experlliarmus", "CARAI"];
    var FalasYa = ["O importante é o que importa", "Isso ai"];
    var FalasHo = ["1. O começo...","Campinas, 17/10/1995 um bebé de olhos castanhos claros, sobre sua cabeça fios castanhos, chorava desorientada, com tudo.", "Nasce ali a segunda filha de um lindo casal, Luciana e José Luis, Desde cedo seu sorriso contagiava a todos em sua volta.",
"Sua mãe a nomeou Luísa, a guerreira gloriosa, com o passar dos anos a criança ganhou grande apreço por livros e pela", "Cultura Geek, houve grandes momentos em sua vida, a formatura do Ensino médio, do curso de confeitaria, caligrafia,", "Do curso de inglês ou daquela vez que derrotou o alfaiate no The Witcher 2. Assim como todos também teve seus baixos,",
"Mas conseguiu superar tudo com a sua força de vontade e ajuda da sua família, hoje é ainda mais incrível e especial que ontem.","Tenho muito orgulho por estar contado um resumo da vida dela minha amada dona, Luísa, Feliz aniversário!!!!", "Fim!"];
    var FalasLu = ["Hmm...", "Fuck"];
    var FalasSa = ["Miau!", "Miau..."];
    var FotosJu = ["Fts/JuliaFt1.png","Fts/JuliaFt2.png"]
    var FotosLa = ["Fts/LauraFt1.png","Fts/LauraFt2.png"]
    var btnselecionado;
    var i = 0;
    var f= 0;
    botaoavanca.addEventListener("click", function(){
        if(btnselecionado == "btnju" ) {
            alert(FalasJu[i]);
            i++;
            if(f<FotosJu.length){
            FtEsquerda.src = FotosJu[f];
            f++;
            FtDireita.src = FotosJu[f];
            f++;
            }
            ImgCentro.src= "Img/JuliaSimbolo.png"
            if(i > FalasJu.length){
                i=0;
             }      
        }
    
        if(btnselecionado == "btnla" ) {
            alert(FalasLa[i]);
            i++;
            if(f<FotosJu.length){
                FtEsquerda.src = FotosJu[f];
                f++;
                FtDireita.src = FotosJu[f];
                f++;
                
            ImgCentro.src= "Img/JuliaSimbolo.png"
            if(i > FalasLa.length){
                i=0;
             }      
        }

        
        if(btnselecionado == "btnya" ) {
            alert(FalasYa[i]);
            i++;
            if(i > FalasYa.length){
                i=0;
             }      
        } 

        if(btnselecionado == "btnho" ) {
            alert(FalasHo[i]);
            i++;
            if(i > FalasHo.length){
                i=0;
             }      
        } 

        if(btnselecionado == "btnsa" ) {
            alert(FalasSa[i]);
            i++;
            if(i > FalasSa.length){
                i=0;
             }      
        } 

        if(btnselecionado == "btnlu" ) {
            alert(FalasLu[i]);
            i++;
            if(i > FalasLu.length){
                i=0;
             }      
        } 
        
        /*for(var i; i = FalasJu.length; i++){
            if(foiclicado == true){
            alert(FalasJu[i]);    
            foiclicado = false;
            }
            
            } */  
        });
    Array.prototype.forEach.call(botoes, function(el) {
        el.addEventListener("click", function(){ //el é o botão que clicou
           btnselecionado = el.id
           i=0;
           f= 0;
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
            
            
            /*
           if(el.id == "btnla"){
                avanca=0;
                botaoavanca.addEventListener("click", function(){
                avanca ++;
                    if(avanca == 1 ){
                        alert("Laura");    //colocar falas da Laura                                    
                    }
                    if(avanca == 2){
                    alert("Laura2");    //colocar falas da Laura                                 
                    }
                });
            }
           
           if(el.id =="btnya"){
            avanca=0;
            if(avanca == 1){
                 alert("Yago");//colocar falas do Yago
            }
           }
           if(el.id =="btnho"){
            avanca=0;
            if(avanca == 1){
                alert("Hortência");//colocar falas da Hortência
            }
           }
           if(el.id =="btnsa"){
            avanca=0;
            if(avanca == 1){
                alert("Savic");//colocar falas da Savic
            }
           }
           if(el.id =="btnlu"){
            avanca=0;
            if(avanca == 1){
                alert("Luísa"); //colocar falas da Luísa
            }
           }   */
        });
    });
  
                
});



  
            /*
                            var Pessoa = 0     // 0= ninguém, 1 = Julia, 2= Hortencia 3= Yago 4= Savic 5=Laura e 6= Luisa
              //Para definir qual fala irá aparecer 
          
                function julia() {
                    Pessoa = 1;
                    if(Pessoa == 1){
                        let Pessoa = document.getElementById('CorpoTd').src = 'Pessoas/Ju.png';
                                                
                    }                            
                }

                function hortencia(){
                    Pessoa = 2;
                    if(Pessoa == 2){
                        let Pessoa = document.getElementById('CorpoTd').src = 'Pessoas/Ho.png'
                    }             
                }

                function yago(){
                    Pessoa = 3;
                    if(Pessoa == 3){
                        let Pessoa = document.getElementById('CorpoTd').src = 'Pessoas/Ya.png'
                    }             
                }
                function savic(){
                    Pessoa = 4;
                    if(Pessoa == 4){
                        let Pessoa = document.getElementById('CorpoTd').src = 'Pessoas/Sa.png'
                    }             
                }
                function laura(){
                    Pessoa = 5;
                    if(Pessoa == 5){
                        let Pessoa = document.getElementById('CorpoTd').src = 'Pessoas/La.png'
                    }             
                }
                function luisa(){
                    Pessoa = 6;
                    if(Pessoa == 6){
                        let Pessoa = document.getElementById('CorpoTd').src = 'Pessoas/Lu.png'
                    }             
                }
                function AvancaFala(){
                    CaixadeTexto++;
                    if(Pessoa == 1 & CaixadeTexto == 1){ //Falas Julia
                        alert("isso ai " + CaixadeTexto);
                    }                 
                    if(Pessoa == 1 & CaixadeTexto == 2){
                        alert("isso ai " + CaixadeTexto);
                    }
                    
                } */