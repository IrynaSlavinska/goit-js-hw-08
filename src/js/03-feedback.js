import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.feedbackForm.addEventListener('submit', onSubmitClick);
refs.feedbackForm.addEventListener('input', throttle(onInput, 500));

let inputValue = {};
getTextArea();

function onSubmitClick(event) {
  event.preventDefault();

  savedMessage();

  const formElements = event.currentTarget.elements;
  // console.log(formElements);
  const email = formElements.email.value;
  const message = formElements.message.value;

  if (!email || !message) {
    alert('Заповніть всі поля');
  } else {
    localStorage.removeItem(STORAGE_KEY);
    refs.feedbackForm.reset();
    // console.log(inputValue);
    inputValue = { email: '', message: '' };
  }
}

function onInput(event) {
  savedMessage();
  inputValue[event.target.name] = event.target.value;
  // console.log(event.target.value);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputValue));
}

function getTextArea() {
  if (localStorage.getItem(STORAGE_KEY)) {
    inputValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    for (const key in inputValue) {
      if (inputValue[key]) {
        console.log(refs.feedbackForm.elements);
        refs.feedbackForm.elements[key].value = inputValue[key];
      }
    }
  }
}

function savedMessage() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    inputValue = savedMessage;
  }
}
