document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn1");
  const tabs = document.querySelectorAll(".tab");

  btn.addEventListener("click", () => {
    alert("Button clicked! You can extend this with API calls, state, etc.");
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});