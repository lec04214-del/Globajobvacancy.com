document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".job-card button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Application feature coming soon!");
    });
  });
});
