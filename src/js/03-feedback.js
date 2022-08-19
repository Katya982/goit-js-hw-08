import throttle from 'lodash.throttle';

const refs = {
     form: document.querySelector('.feedback-form'),
     email: document.querySelector('.feedback-form input'),
     message: document.querySelector(".feedback-form  textarea"),
};
     refs.form.addEventListener("input", throttle(onTextareaInput, 500));
     refs.form.addEventListener("submit", onFormSubmit);
  
     const STORAGE_KEY = "feedback-form-state";                           
     const formData = {};

     function onTextareaInput(event) {
       formData[event.target.name] = event.target.value;
       localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   };
                                                                     
     function onFormSubmit(event) {
        event.preventDefault(); 
        refs.email = event.currentTarget.email.value;
        refs.message = event.currentTarget.message.value;

       if (refs.email === '' || refs.message === '') {
          return alert('All fields must be filled!');
        }
          console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
          event.currentTarget.reset();                                      
          localStorage.removeItem(STORAGE_KEY);      
        
   };
      function populateTextarea() {
       const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)); 
       if (savedMessage) {
         refs.email.value = savedMessage.email;
         refs.message.value = savedMessage.message;
    }
   };
populateTextarea();
