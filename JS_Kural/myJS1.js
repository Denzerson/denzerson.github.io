//1.2a) Die Funktion liefert "Hallo Welt"
//1.2b) Die Funktion liefert "Hallo TGM"
//1.2c) Die Funktion liefert 0,1,4,9,16,25,36,49,64,81


//1.2d)
let summe = 0;
function foo() {
  for (let i = 0; i < 10; ++i) {
    function bar() {
      console.log(i*i);
      count(i*i);
    }
    
    bar();
  }
}

function count(n) {
  summe = summe+n;
  return summe;
}

foo();
console.log("Summe:"+summe);


    
        <!--a
            "Hallo Welt" wird als alert ausgegeben 
            und in der Konsole kommt ein Fehler da die Variable nur in der Methode existiert
        -->



        <!--b
            Es wird "HalloTGM" ausgegeben, da "me" noch immer den Wert TGM von der ersten Zeile hatte.
            In der Konsole wird "___" ausgegeben da es zu der Zeit schon überschrieben wurde.
        -->



        <!--c
            Nichts, da die funktion foo nie aufgerufen wird
        -->



        <!--d-->
        <script>
            let number = prompt("Geben Sie eine Zahl ein!");
            function math(nummer){
                let i = 1;
                let ergebnis = 0;

                while(i != nummer){
                    ergebnis += i;
                    i++;
                }
                alert(ergebnis);
            }
            math(number)
        </script>



        <!--e Zuerst der Mousdown dann Mouseup. Onclick wird nicht getriggered-->
        <script>
            function click(){
                console.log("Maus wurde geklickt.")
            }
            function down(){
                console.log("Maus wurde gedrückt.")
            }
            function up(){
                console.log("Maus wurde losgelassen.")
            }
        </script>
        <button onclick="click()" onmousedown="down()" onmouseup="up()">Click me!</button>



        <!--f-->
        <script>
            function coordinates(e){
                alert(e.pageX + ", " + e.pageY);
            }
        </script>

        <script>
            function logon(event) {
                if (event.altKey) {
                    alert("Alt key is pressed.");
                }
            }
        </script>

        <script>
            function taginfo(){
                alert(window.event.srcElement.tagName);
            }
        </script>


        <div style="width:400px; height:300px; border:1px solid black"
            onclick="logon(event); coordinates(event); taginfo()" >
        </div>


        <!--g der Body ist im Fokus-->
        <script>
            function taginfoG(e){
                console.log(window.event.srcElement.tagName);
                console.log(e.keyCode);
            }
        </script>

        

        <!--i-->
        <script>
            function array(a){
                let a2 = [0, 0, 0, 0]
                let i2 = a.length-1
                for(let i = 0; i <a.length; i++){
                    a2[i] = a[i2]
                    i2--
                }
                console.log(a2)
            }
            let a = [1, 2, 3, 4]
            array(a)
        </script>
