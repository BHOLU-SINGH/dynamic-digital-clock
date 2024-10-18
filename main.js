function clock() {
  let date = new Date();
  var hr, min, sec, h, m, s, mid;
  hr = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  h = document.getElementById("hr");
  m = document.getElementById("min");
  s = document.getElementById("sec");
  mid = document.getElementById("midday");

  if (hr >= 12) {
    h.innerHTML = Math.abs(hr - 12) + "<br>hour";
    mid.innerHTML = "PM";
  } else {
    h.innerHTML = hr + "<br>hour";
    mid.innerHTML = "AM";
  }
  m.innerHTML = min + "<br>minute";
  s.innerHTML = sec + "<br>second";

  setInterval(function () {
    clock();
  }, 1000);
}
clock();
