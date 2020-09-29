// Writes the new ouput text
updateText = () => {
  let newText = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = newText;
};

// Toggles the bold class for the output text
makeBold = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
  document.getElementById("italic").classList.remove("active");
  document.getElementById("underline").classList.remove("active");
};

// Toggles the italic class for the output text
makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
  document.getElementById("bold").classList.remove("active");
  document.getElementById("underline").classList.remove("active");
};

// Toggles the underline class for the output text
makeUnderline = (elem) => {
  elem.classList.toggle("active");
  let formattedText = document.getElementById("text-output");

  if (formattedText.classList.contains("underline")) {
    formattedText.classList.remove("underline");
  } else {
    formattedText.classList.add("underline");
  }

  document.getElementById("bold").classList.remove("active");
  document.getElementById("italic").classList.remove("active");
};

// Changes the alignment of the text
alignText = (elem, alignType) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName("align");
  for (let button of buttonsList) {
    button.classList.remove("active");
  }
  elem.classList.toggle("active");
};
