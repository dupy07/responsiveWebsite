bar = document.getElementById("bar");
close = document.getElementById("close");
nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/*SELF JAVA*/
var pro = document.getElementsByClassName("pro");
pro[0].onclick = function () {
  window.location.href = "sproduct.html";
};

pro[1].addEventListener("click", function () {
  window.location.href = "sproduct1.html";
});
pro[2].onclick = function () {
  window.location.href = "sproduct2.html";
};
pro[3].onclick = function () {
  window.location.href = "sproduct3.html";
};
pro[4].onclick = function () {
  window.location.href = "sproduct4.html";
};
pro[5].onclick = function () {
  window.location.href = "sproduct5.html";
};
pro[6].onclick = function () {
  window.location.href = "sproduct6.html";
};
pro[7].onclick = function () {
  window.location.href = "sproduct7.html";
};
pro[8].onclick = function () {
  window.location.href = "sproduct8.html";
};
pro[9].onclick = function () {
  window.location.href = "sproduct9.html";
};
pro[10].onclick = function () {
  window.location.href = "sproduct10.html";
};
pro[11].onclick = function () {
  window.location.href = "sproduct11.html";
};
pro[12].onclick = function () {
  window.location.href = "sproduct12.html";
};
pro[13].onclick = function () {
  window.location.href = "sproduct13.html";
};
pro[14].onclick = function () {
  window.location.href = "sproduct14.html";
};
pro[15].onclick = function () {
  window.location.href = "sproduct15.html";
};
