import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

const formData = savedMessage ?? {};
     
if (formData.email) formRef.elements.email.value = formData.email;
if (formData.message) formRef.elements.message.value = formData.message;
    
formRef.addEventListener("input", throttle(onTextareaInput, 500));
formRef.addEventListener("submit", onFormSubmit);

  function onTextareaInput(event) {
       formData[event.target.name] = event.target.value;
       localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };
                                                                     
  function onFormSubmit(event) {
      event.preventDefault(); 
       
       
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.message.value === '') {
    alert('All fields must be filled!');
    return;
  }

  console.log(formData);    
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
};


