const getChecked = () => {
  const arr = document.querySelectorAll("[name='radio-list']");
  let theChecked;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      theChecked = arr[i].value;
    }
  }
  return theChecked;
};
const changeView = () => {
  const firstView = document.getElementById("first-side");
  const secondView = document.getElementById("second-side");
  firstView.classList.add("hide");
  secondView.classList.remove("hide");
};

const getTheNumber = (element) => {
  const ratingBlock = document.getElementById("rating-block");
  const paragraph = document.createElement("p");
  paragraph.innerText = `You selected ${element} out of 5`;
  ratingBlock.appendChild(paragraph);
};

const showStatus = () => {
  const theChecked = getChecked();
  changeView();
  getTheNumber(theChecked);
};
