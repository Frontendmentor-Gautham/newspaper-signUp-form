const signUpContainer = document.getElementsByClassName(
  "signUp-container-div"
)[0];
const successMessageContainer = document.getElementsByClassName(
  "success-message-container"
)[0];

// Function to check the email format
function checkEmailFormat() {
  const signUpEmailInput =
    document.getElementsByClassName("email-signUp-input")[0];
  const emailValue = signUpEmailInput.value;
  const containsAtSymbol = emailValue.indexOf("@") !== -1;
  const containsDotCom = emailValue.indexOf(".com") !== -1;

  if (containsAtSymbol && containsDotCom) {
    // The email contains both "@" and ".com"
    console.log("Valid email format.");
    // Add the 'none' class to the parent div
    signUpContainer.classList.toggle("none");
    successMessageContainer.classList.toggle("block");
  } else {
    // The email does not contain both "@" and ".com"
    console.log("Invalid email format.");
    const errorMessage = document.getElementsByClassName("error-message")[0];
    errorMessage.classList.toggle("block");
    signUpEmailInput.classList.toggle("error");
  }
}

function signUpClickListener() {
  const signUpButton = document.getElementsByClassName("btn-sign-up");

  // Check if there is a button with the class 'btn-sign-up'
  if (signUpButton.length > 0) {
    // Add click event listener to the button
    signUpButton[0].addEventListener("click", function (event) {
      event.preventDefault();
      checkEmailFormat();
    });
  }
}

function dissmissMessageClickListener() {
  const dissmissMessageButton = document.getElementsByClassName(
    "btn-dissmiss-message"
  );
  if (dissmissMessageButton.length > 0) {
    dissmissMessageButton[0].addEventListener("click", function (event) {
      event.preventDefault();
      signUpContainer.classList.toggle("none");
      successMessageContainer.classList.toggle("block");
    });
  }
}

signUpClickListener();
dissmissMessageClickListener();
