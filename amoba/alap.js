
/*
function Generalas()
{
  var div = document.createElement("div");
  div.id = "main";
  var z = 3;
  for(var i = 1; i < 10; i++)
  {
    var input = document.createElement("input");
    input.type ="text";
    input.id = "mezo"+i;
    input.onclick= "funkcio_z(); myfunc();";
    z++;

  }

}
*/
function myfunc() {

  var mezo1, mezo2, mezo3, mezo4, mezo5, mezo6, mezo7, mezo8, mezo9;
  mezo1 = document.getElementById("mezo1").value;
  mezo2 = document.getElementById("mezo2").value;
  mezo3 = document.getElementById("mezo3").value;
  mezo4 = document.getElementById("mezo4").value;
  mezo5 = document.getElementById("mezo5").value;
  mezo6 = document.getElementById("mezo6").value;
  mezo7 = document.getElementById("mezo7").value;
  mezo8 = document.getElementById("mezo8").value;
  mezo9 = document.getElementById("mezo9").value;

  if ((mezo1 == 'x' || mezo1 == 'X') && (mezo2 == 'x' ||
      mezo2 == 'X') && (mezo3 == 'x' || mezo3 == 'X')) {
      document.getElementById('print').innerHTML = "Player X won";
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo5").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo8").disabled = true;
      document.getElementById("mezo9").disabled = true;
      window.alert('Player X won');
  }
  else if ((mezo1 == 'x' || mezo1 == 'X') && (mezo4 == 'x' ||
      mezo4 == 'X') && (mezo7 == 'x' || mezo7 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo5").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo8").disabled = true;
      document.getElementById("mezo9").disabled = true;

      window.alert('Player X won');
  }
  else if ((mezo7 == 'x' || mezo7 == 'X') && (mezo8 == 'x' ||
      mezo8 == 'X') && (mezo9 == 'x' || mezo9 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo5").disabled = true;
      document.getElementById("mezo6").disabled = true;
      window.alert('Player X won');
  }
  else if ((mezo3 == 'x' || mezo3 == 'X') && (mezo6 == 'x' ||
      mezo6 == 'X') && (mezo9 == 'x' || mezo9 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo5").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo8").disabled = true;
      window.alert('Player X won');
  }
  else if ((mezo1 == 'x' || mezo1 == 'X') && (mezo5 == 'x' ||
      mezo5 == 'X') && (mezo9 == 'x' || mezo9 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo8").disabled = true;
      window.alert('Player X won');
  }
  else if ((mezo3 == 'x' || mezo3 == 'X') && (mezo5 == 'x' ||
      mezo5 == 'X') && (mezo7 == 'x' || mezo7 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo8").disabled = true;
      document.getElementById("mezo9").disabled = true;
      window.alert('Player X won');
  }
  else if ((mezo2 == 'x' || mezo2 == 'X') && (mezo5 == 'x' ||
      mezo5 == 'X') && (mezo8 == 'x' || mezo8 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo9").disabled = true;
      window.alert('Player X won');
  }
  else if ((mezo4 == 'x' || mezo4 == 'X') && (mezo5 == 'x' ||
      mezo5 == 'X') && (mezo6 == 'x' || mezo6 == 'X')) {
      document.getElementById('print')
          .innerHTML = "Player X won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo8").disabled = true;
      document.getElementById("mezo9").disabled = true;
      window.alert('Player X won');
  }


  else if ((mezo1 == '0' || mezo1 == '0') && (mezo2 == '0' ||
      mezo2 == '0') && (mezo3 == '0' || mezo3 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo5").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo8").disabled = true;
      document.getElementById("mezo9").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((mezo1 == '0' || mezo1 == '0') && (mezo4 == '0' ||
      mezo4 == '0') && (mezo7 == '0' || mezo7 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo5").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo8").disabled = true;
      document.getElementById("mezo9").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((mezo7 == '0' || mezo7 == '0') && (mezo8 == '0' ||
      mezo8 == '0') && (mezo9 == '0' || mezo9 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo5").disabled = true;
      document.getElementById("mezo6").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((mezo3 == '0' || mezo3 == '0') && (mezo6 == '0' ||
      mezo6 == '0') && (mezo9 == '0' || mezo9 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo5").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo8").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((mezo1 == '0' || mezo1 == '0') && (mezo5 == '0' ||
      mezo5 == '0') && (mezo9 == '0' || mezo9 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo8").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((mezo3 == '0' || mezo3 == '0') && (mezo5 == '0' ||
      mezo5 == '0') && (mezo7 == '0' || mezo7 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo8").disabled = true;
      document.getElementById("mezo9").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((mezo2 == '0' || mezo2 == '0') && (mezo5 == '0' ||
      mezo5 == '0') && (mezo8 == '0' || mezo8 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo4").disabled = true;
      document.getElementById("mezo6").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo9").disabled = true;
      window.alert('Player 0 won');
  }
  else if ((mezo4 == '0' || mezo4 == '0') && (mezo5 == '0' ||
      mezo5 == '0') && (mezo6 == '0' || mezo6 == '0')) {
      document.getElementById('print')
          .innerHTML = "Player 0 won";
      document.getElementById("mezo1").disabled = true;
      document.getElementById("mezo2").disabled = true;
      document.getElementById("mezo3").disabled = true;
      document.getElementById("mezo7").disabled = true;
      document.getElementById("mezo8").disabled = true;
      document.getElementById("mezo9").disabled = true;
      window.alert('Player 0 won');
  }


  else if ((mezo1 == 'X' || mezo1 == '0') && (mezo2 == 'X'
      || mezo2 == '0') && (mezo3 == 'X' || mezo3 == '0') &&
      (mezo4 == 'X' || mezo4 == '0') && (mezo5 == 'X' ||
      mezo5 == '0') && (mezo6 == 'X' || mezo6 == '0') &&
      (mezo7 == 'X' || mezo7 == '0') && (mezo8 == 'X' ||
      mezo8 == '0') && (mezo9 == 'X' || mezo9 == '0')) {
          document.getElementById('print')
              .innerHTML = "Match Tie";
          window.alert('Match Tie');
  }
  else {

      if (flag == 1) {
          document.getElementById('print')
              .innerHTML = "Player X Turn";
      }
      else {
          document.getElementById('print')
              .innerHTML = "Player 0 Turn";
      }
  }
}


function funkcio_2() {
  location.reload();
  document.getElementById('mezo1').value = '';
  document.getElementById("mezo2").value = '';
  document.getElementById("mezo3").value = '';
  document.getElementById("mezo4").value = '';
  document.getElementById("mezo5").value = '';
  document.getElementById("mezo6").value = '';
  document.getElementById("mezo7").value = '';
  document.getElementById("mezo8").value = '';
  document.getElementById("mezo9").value = '';

}


szam = 1;
function funkcio_3() {
  if (szam == 1) {
      document.getElementById("mezo1").value = "X";
      document.getElementById("mezo1").disabled = true;
      szam = 0;
  }
  else {
      document.getElementById("mezo1").value = "0";
      document.getElementById("mezo1").disabled = true;
      szam = 1;
  }
}

function funkcio_4() {
  if (szam == 1) {
      document.getElementById("mezo2").value = "X";
      document.getElementById("mezo2").disabled = true;
      szam = 0;
  }
  else {
      document.getElementById("mezo2").value = "0";
      document.getElementById("mezo2").disabled = true;
      szam = 1;
  }
}

function funkcio_5() {
  if (szam == 1) {
      document.getElementById("mezo3").value = "X";
      document.getElementById("mezo3").disabled = true;
      szam = 0;
  }
  else {
      document.getElementById("mezo3").value = "0";
      document.getElementById("mezo3").disabled = true;
      szam = 1;
  }
}

function funkcio_6() {
  if (szam == 1) {
      document.getElementById("mezo4").value = "X";
      document.getElementById("mezo4").disabled = true;
      szam = 0;
  }
  else {
      document.getElementById("mezo4").value = "0";
      document.getElementById("mezo4").disabled = true;
      szam = 1;
  }
}

function funkcio_7() {
  if (szam == 1) {
      document.getElementById("mezo5").value = "X";
      document.getElementById("mezo5").disabled = true;
      szam = 0;
  }
  else {
      document.getElementById("mezo5").value = "0";
      document.getElementById("mezo5").disabled = true;
      szam = 1;
  }
}

function funkcio_8() {
  if (szam == 1) {
      document.getElementById("mezo6").value = "X";
      document.getElementById("mezo6").disabled = true;
      szam = 0;
  }
  else {
      document.getElementById("mezo6").value = "0";
      document.getElementById("mezo6").disabled = true;
      szam = 1;
  }
}

function funkcio_9() {
  if (szam == 1) {
      document.getElementById("mezo7").value = "X";
      document.getElementById("mezo7").disabled = true;
      szam = 0;
  }
  else {
      document.getElementById("mezo7").value = "0";
      document.getElementById("mezo7").disabled = true;
      szam = 1;
  }
}

function funkcio_10() {
  if (szam == 1) {
      document.getElementById("mezo8").value = "X";
      document.getElementById("mezo8").disabled = true;
      szam = 0;
  }
  else {
      document.getElementById("mezo8").value = "0";
      document.getElementById("mezo8").disabled = true;
      szam = 1;
  }
}

function funkcio_11() {
  if (szam == 1) {
      document.getElementById("mezo9").value = "X";
      document.getElementById("mezo9").disabled = true;
      szam = 0;
  }
  else {
      document.getElementById("mezo9").value = "0";
      document.getElementById("mezo9").disabled = true;
      szam = 1;
  }
}



function Main()
{
  Generalas();
  myfunc();
  funkcio_2();
  funkcio_3();
  funkcio_4();
  funkcio_5();
  funkcio_6();
  funkcio_7();
  funkcio_8();
  funkcio_9();
  funkcio_10();
}
Main();