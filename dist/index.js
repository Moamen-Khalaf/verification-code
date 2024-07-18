"use strict";
let inputs = Array.from(document.querySelectorAll("form input"));
const res = "12345";
for (let i = 0; i < inputs.length; i++) {
  if (i < inputs.length - 1) {
    inputs[i].addEventListener("input", (e) => {
      if (inputs[i].value.trim().length == 1) {
        inputs[i].blur();
        inputs[i + 1].value = "";
        inputs[i + 1].focus();
      }
    });
  }
  if (i > 0) {
    inputs[i].addEventListener("keydown", (event) => {
      const key = event.key;
      if (key === "Backspace" || key === "Delete") {
        inputs[i].value = "";
        inputs[i].blur();
        inputs[i - 1].focus();
      }
      inputs.map((ele) => {
        ele.style.borderColor = "black";
      });
    });
  }
  if (i === inputs.length - 1) {
    inputs[i].addEventListener("input", (e) => {
      const passkey = inputs.reduce((acc, cur) => {
        return acc + cur.value;
      }, "");
      if (passkey === res) {
        inputs.map((ele) => {
          ele.style.borderColor = "#72ff78";
        });
      } else {
        inputs.map((ele) => {
          ele.style.borderColor = "#ff1b1b";
        });
      }
    });
  }
}
inputs[0].addEventListener("paste", (e) => {
  e.preventDefault();
  let i = 0;
  let data = String(e.clipboardData.getData("text"));
  inputs.forEach((ele) => {
    ele.value = data[i++];
  });
  const passkey = inputs.reduce((acc, cur) => {
    return acc + cur.value;
  }, "");
  if (passkey === res) {
    inputs.map((ele) => {
      ele.style.borderColor = "#72ff78";
    });
  } else {
    inputs.map((ele) => {
      ele.style.borderColor = "#ff1b1b";
    });
  }
  inputs[inputs.length - 1].focus();
});
