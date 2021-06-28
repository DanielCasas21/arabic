function masculineNouns() {
  var x = document.getElementById("noun").value;
  var lastStr = x.slice(-1);
  var tMarboota = "ة";

  if (lastStr === tMarboota) {
    document.getElementById("noun1").innerHTML = x.slice(0, -1) + "تي";
    document.getElementById("noun2").innerHTML = x.slice(0, -1) + "تنا";
    document.getElementById("noun3").innerHTML = x.slice(0, -1) + "تك";
    document.getElementById("noun4").innerHTML = x.slice(0, -1) + "تكما";
    document.getElementById("noun5").innerHTML = x.slice(0, -1) + "تكم";
    document.getElementById("noun6").innerHTML = x.slice(0, -1) + "تك";
    document.getElementById("noun7").innerHTML = x.slice(0, -1) + "تكما";
    document.getElementById("noun8").innerHTML = x.slice(0, -1) + "تكن";
    document.getElementById("noun9").innerHTML = x.slice(0, -1) + "ته";
    document.getElementById("noun10").innerHTML = x.slice(0, -1) + "تهما";
    document.getElementById("noun11").innerHTML = x.slice(0, -1) + "تهم";
    document.getElementById("noun12").innerHTML = x.slice(0, -1) + "تها";
    document.getElementById("noun13").innerHTML = x.slice(0, -1) + "تهما";
    document.getElementById("noun14").innerHTML = x.slice(0, -1) + "تهن";
  }

  else{
    document.getElementById("noun1").innerHTML = x + "ي";
    document.getElementById("noun2").innerHTML = x + "نا";
    document.getElementById("noun3").innerHTML = x + "ك";
    document.getElementById("noun4").innerHTML = x + "كما";
    document.getElementById("noun5").innerHTML = x + "كم";
    document.getElementById("noun6").innerHTML = x + "ك";
    document.getElementById("noun7").innerHTML = x + "كما";
    document.getElementById("noun8").innerHTML = x + "كن";
    document.getElementById("noun9").innerHTML = x + "ه";
    document.getElementById("noun10").innerHTML = x + "هما";
    document.getElementById("noun11").innerHTML = x + "هم";
    document.getElementById("noun12").innerHTML = x + "ها";
    document.getElementById("noun13").innerHTML = x + "هما";
    document.getElementById("noun14").innerHTML = x + "هن";
  }

}