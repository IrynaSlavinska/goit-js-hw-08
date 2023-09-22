import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const feedbackInput = document.querySelector('.feedback-form input');
const feedbackMessage = document.querySelector('.feedback-form textarea');

const storageKey = 'feedback-form-state';

feedbackForm.addEventListener('submit', onSubmitClick);
feedbackForm.addEventListener('input', throttle(onInputClick, 500));
