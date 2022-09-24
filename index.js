const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  if (event.target.className === "remove-button") {
    let pane = event.target.closest(".pane");
    pane.remove();
  }
});
