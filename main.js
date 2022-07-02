alert("antes de empezar en las llaves no existe el empate no xq este mal si no xq el futbol es un duelo a muerte/before starting in the keys there is no tie, not because it is wrong, but because soccer is a duel to the death");
alert("y a demas en los octavos de la llave no anda el automatico  asi que los equipos se ponene manualmente")//ya que no lo se hacer :( se

function handleSubmit(event) {
    event.preventDefault();
    let local = event.target.children[0].textContent;
    let visitante = event.target.children[3].textContent;
    let golesLocal = parseInt(event.target.children[1].value);
    let golesVisitante = parseInt(event.target.children[2].value);
    console.log(golesLocal)
    console.log(golesVisitante)
    let ganoLocal = false;
    let empate = false;
    let ganoVisitante = false;
    if (golesLocal > golesVisitante) ganoLocal = true;
    else if (golesLocal < golesVisitante) ganoVisitante = true;
    else if (golesLocal == golesVisitante) empate = true;
  
    let tds = document.querySelectorAll('td');
    console.log(tds)
    for (let td of tds) {
      if (td.textContent == local || td.textContent == visitante) {
        // si empatan
        if (empate) {
          td.parentElement.children[5].textContent = parseInt(td.parentElement.children[5].textContent) + 1;
          //si empatan tienen 1 punto cada uno
          td.parentElement.children[1].textContent = parseInt(td.parentElement.children[1].textContent) + 1;
        }
        // PJ + 1
        td.parentElement.children[2].textContent = parseInt(td.parentElement.children[2].textContent) + 1;
      }
      if (td.textContent == local) {
        //si gana local
        if (ganoLocal) {
          td.parentElement.children[3].textContent = parseInt(td.parentElement.children[3].textContent) + 1;
          //diferencia de goles local
          td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + golesLocal - golesVisitante;
          //si gana tendra 3 pts
          td.parentElement.children[1].textContent = parseInt(td.parentElement.children[1].textContent) + 3;
        }
        //si pierde local
        if (ganoVisitante) {
          td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + 1;
        }
        // GF del local
        td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + parseInt(golesLocal);
        // GC del local
        td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + parseInt(golesVisitante);
      }
      if (td.textContent == visitante) {
        //si gana visitante
        if (ganoVisitante) {
          td.parentElement.children[3].textContent = parseInt(td.parentElement.children[3].textContent) + 1;
          //si gana tendra 3 pts
          td.parentElement.children[1].textContent = parseInt(td.parentElement.children[1].textContent) + 3;
        }
        //si pierde visitante
        if (ganoLocal) {
          td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + 1;
        }
        // GF del visitante
        td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + parseInt(golesVisitante);
        // GC del visitante
        td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + parseInt(golesLocal);
        //diferencia de gol Visitante
        if (ganoVisitante) td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + golesVisitante - golesLocal;
      }
    }
  }

  function cuartos() {
    let cuartos1A = document.getElementById('cuartos1A').value; let cuartos2B = document.getElementById('cuartos2B').value;
    let cuartos2A = document.getElementById('cuartos2A').value;
    let cuartos1B = document.getElementById('cuartos1B').value;
    let cuartos1C = document.getElementById('cuartos1C').value;
    let cuartos2D = document.getElementById('cuartos2D').value;
    let cuartos2C = document.getElementById('cuartos2C').value;
    let cuartos1D = document.getElementById('cuartos1D').value;
    let cuartos1E = document.getElementById('cuartos1E').value;
    let cuartos2F = document.getElementById('cuartos2F').value;
    let cuartos1F = document.getElementById('cuartos1F').value;let cuartos2G = document.getElementById('cuartos2G').value;
    let cuartos2E = document.getElementById('cuartos2E').value;
    let cuartos1G = document.getElementById('cuartos1G').value;
    let cuartos2H = document.getElementById('cuartos2H').value;
    let cuartos1H = document.getElementById('cuartos1H').value;

  
    if (cuartos1A > cuartos2B) document.getElementById('cuar1').value = document.getElementById('1A').value;
    if (cuartos1A < cuartos2B) document.getElementById('cuar1').value = document.getElementById('2B').value;
    if (cuartos2A > cuartos1B) document.getElementById('cuar2').value = document.getElementById('2A').value;
    if (cuartos2A < cuartos1B) document.getElementById('cuar2').value = document.getElementById('1B').value;
    if (cuartos1C > cuartos2D) document.getElementById('cuar3').value = document.getElementById('1C').value;
    if (cuartos1C < cuartos2D) document.getElementById('cuar3').value = document.getElementById('2D').value;
    if (cuartos2C > cuartos1D) document.getElementById('cuar4').value = document.getElementById('2C').value;
    if (cuartos2C < cuartos1D) document.getElementById('cuar4').value = document.getElementById('1D').value;
    if (cuartos1E > cuartos2F) document.getElementById('cuar5').value = document.getElementById('1E').value;
    if (cuartos1E < cuartos2F) document.getElementById('cuar5').value = document.getElementById('2F').value;
    if (cuartos2E > cuartos1F) document.getElementById('cuar6').value = document.getElementById('2E').value;
    if (cuartos2E < cuartos1F) document.getElementById('cuar6').value = document.getElementById('1F').value;
    if (cuartos1G > cuartos2H) document.getElementById('cuar7').value = document.getElementById('1G').value;
    if (cuartos1G < cuartos2H) document.getElementById('cuar7').value = document.getElementById('2H').value;
    if (cuartos2G > cuartos1H) document.getElementById('cuar8').value = document.getElementById('2G').value;
    if (cuartos2G < cuartos1H) document.getElementById('cuar8').value = document.getElementById('1H').value;
    }

    function semis() {
      let semis1 = document.getElementById('semis1').value;
      let semis2 = document.getElementById('semis2').value;
      let semis3 = document.getElementById('semis3').value;
      let semis4 = document.getElementById('semis4').value;
      let semis5 = document.getElementById('semis5').value;
      let semis6 = document.getElementById('semis6').value;
      let semis7 = document.getElementById('semis7').value;
      let semis8 = document.getElementById('semis8').value;
    
      if (semis1 < semis2) document.getElementById('sm1').value = document.getElementById('cuar2').value;
      if (semis1 > semis2) document.getElementById('sm1').value = document.getElementById('cuar1').value;
      if (semis7 > semis8) document.getElementById('sm4').value = document.getElementById('cuar7').value;
      if (semis3 < semis4) document.getElementById('sm2').value = document.getElementById('cuar4').value;
      if (semis5 > semis6) document.getElementById('sm3').value = document.getElementById('cuar5').value;
      if (semis5 < semis6) document.getElementById('sm3').value = document.getElementById('cuar6').value;
      if (semis3 > semis4) document.getElementById('sm2').value = document.getElementById('cuar3').value; 
      if (semis7 < semis8) document.getElementById('sm4').value = document.getElementById('cuar8').value;
    }

    function final() {
      let final1 = document.getElementById('f1').value;
      let final2 = document.getElementById('f2').value;
      let final3 = document.getElementById('f3').value;
      let final4 = document.getElementById('f4').value;
    
      if (final1 > final2) document.getElementById('final1').value = document.getElementById('sm1').value;
      if (final1 < final2) document.getElementById('final1').value = document.getElementById('sm2').value;
      if (final3 > final4) document.getElementById('final2').value = document.getElementById('sm3').value;
      if (final3 < final4) document.getElementById('final2').value = document.getElementById('sm4').value;
    }
    //no anda 
    function campeon() { 
      let champion1 = document.getElementById('champion1').value;
      let champion2 = document.getElementById('champion2').value;

      if (champion1 > champion2) {
        alert("champion one is the best team in the world")
      }
      else (champion1 < champion2) { 
        alert("champion two is the best team in the world")
      }

    }

    campeon();
 
//f5
  function reinicia() {
    location.reload()
    }

//aspectos a mejorar el js todo y tal ves hacerlo con fremeworks(si algun dia lo se usar), estilo ya que no me dio el tiempo, y poner un ramdom a los punstos y que se haga todo solo con un click 



  