         //drag and drop
        function allowDrop(ev) {
            ev.preventDefault();
        }
        
        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }
        
        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }

        function drag2(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
          }
          
          function drag3(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
          }
          
          function drag4(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
          }
          
          function drag5(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
          }
          
          function drag6(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
          }
          
          function drag7(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
          }
          
          function drag8(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
          }
          
        
          function imagens(){
        
        const sombras = [
          './img/sombra1.png',
          './img/sombra2.png',
          './img/sombra3.png',
          './img/sombra4.png',
          './img/sombra5.png',
          './img/sombra6.png',
          './img/sombra4.png',
          './img/sombra8.png'
         
        
        ];
        
        const selectButton = document.getElementById('selectButton');
        const sombra = document.getElementById('sombra');
        
        
          //sorteio
          const randomIndex = Math.floor(Math.random() * sombras.length);
          const imageUrl = sombras[randomIndex];
        
          //imagem sorteio
          sombra.src = imageUrl;

        
          }