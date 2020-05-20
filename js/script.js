let t = document.querySelector(".nav-btn"),
  e = document.querySelector(".nav-list"),
  s = document.querySelectorAll(".nav-list li"),
  a = document.querySelector(".spoiler"),
  n = document.querySelector(".spoiler-item-active"),
  i = document.querySelectorAll("#screen-start-svg path"),
  l = 2.5;
for (let t = 0; t < 34; t++)
  (i[
    t
  ].style.animation = `line-anim 1.5s ease forwards ${(l += 0.1)}s, fill 1.5s ease-in forwards 7s`),
    (i[t].style.strokeDasharray = i[t].getTotalLength()),
    (i[t].style.strokeDashoffset = i[t].getTotalLength());
t.addEventListener("click", () => {
  s.forEach((t, e) => {
    t.style.animation
      ? ((t.style.animation = ""), (t.style.transform = "translateX(0px)"))
      : ((t.style.transform = "translateX(1000px)"),
        (t.style.animation = `linkFade 0.5s ease forwards ${e / 7 + 0.3}s`));
  }),
    e.classList.toggle("nav-list-active"),
    t.classList.toggle("nav-btn-active");
}),
  e.addEventListener("transitionend", () => {
    e.classList.contains("nav-list-active") ||
      (e.parentNode.style.zIndex = "-1");
  }),
  e.addEventListener("transitionstart", () => {
    e.classList.contains("nav-list-active") &&
      (e.parentNode.style.zIndex = "10");
  }),
  e.addEventListener("click", () => {
    s.forEach((t) => {
      (t.style.animation = ""), (t.style.transform = "translateX(0px)");
    }),
      e.classList.toggle("nav-list-active"),
      t.classList.toggle("nav-btn-active");
  }),
  a.addEventListener("click", (t) => {
    let e = t.target.parentNode,
      s = e.classList;
    s.contains("spoiler-item") &&
      (n.classList.remove("spoiler-item-active"),
      s.add("spoiler-item-active"),
      (n = e));
  });
