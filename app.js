document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const more1 = document.querySelector(".more1");
  const more2 = document.querySelector(".more2");
  // const headerMenu = document.getElementById("header-menu");
  // const headerMenuIcon = document.getElementById("header-menu-icon");

  // document.addEventListener("click", function (e) {
  //   console.log(e.target);
  //   alert("hdh");
  //   if (headerMenuIcon.contains(e.target)) {
  //     headerMenu.classList.toggle("hidden");
  //   }
  // });
  const headerMenu = document.getElementById("header-menu");
  const headerMenuIcon = document.getElementById("header-menu-icon");

  document.addEventListener("click", function (e) {
    if (headerMenuIcon.contains(e.target)) {
      headerMenu.classList.toggle("hidden");
      headerMenu.classList.toggle("top-menu-expanded");
    }
  });

  button1.addEventListener("click", function () {
    // Ẩn tất cả các div có class more
    more1.style.display = "grid";
    // console.log(more1);
    more2.style.display = "none";
    // console.log(more2);
    button1.classList.add("bg");
    button2.classList.remove("bg");
    button3.classList.remove("bg");
  });

  button2.addEventListener("click", function () {
    // Ẩn tất cả các div có class more
    more1.style.display = "none";
    more2.style.display = "grid";
    button2.classList.add("bg");
    button1.classList.remove("bg");
    button3.classList.remove("bg");
  });

  button3.addEventListener("click", function () {
    // Ẩn tất cả các div có class more
    more1.style.display = "grid";
    more2.style.display = "grid";
    button3.classList.add("bg");
    button2.classList.remove("bg");
    button1.classList.remove("bg");
  });
});
