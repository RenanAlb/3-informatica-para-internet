document.addEventListener("DOMContentLoaded", () => {
  const buttonSim = document.querySelector("#button-sim");
  const buttonNao = document.querySelector("#button-nao");
  const elementSim = document.querySelector(".sim");
  const elementNao = document.querySelector(".nao");
  const elementButtons = document.querySelector(".buttons");

  elementSim.style.display = "none";
  elementNao.style.display = "none";

  const blockProposta = (result) => {
    console.log(result);

    if (result === "sim") {
      if (elementSim.style.display === "none") {
        elementSim.style.display = "block";
      }
    } else if (result === "nao") {
      if (elementNao.style.display === "none") {
        elementNao.style.display = "block";
      }
    }
  };

  buttonSim.addEventListener("click", () => blockProposta("sim"));
  buttonNao.addEventListener("click", () => blockProposta("nao"));

  const changePlaceButton = () => {
    const x = Math.floor(Math.random() * elementButtons.clientWidth);
    const y = Math.floor(Math.random() * elementButtons.clientHeight);

    console.log(x, y);

    buttonNao.style.left = `${x}px`;
    buttonNao.style.top = `${y}px`;
  };

  buttonNao.addEventListener("mouseenter", changePlaceButton);
  buttonNao.addEventListener("mousemove", changePlaceButton);
});
