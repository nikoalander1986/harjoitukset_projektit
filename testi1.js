function kirjoita()
{
  var teksti = document.getElementById('teksti').value;
  document.getElementById('t1').innerHTML = "taisitpa kirjoittaa tekstin: " + teksti;
}