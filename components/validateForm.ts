
const validateForm = (name: string, email: string, message: string, schedule: string) => {
    let formIsValid = true;
    let errors: Record<string, string> = {};  // Define the type for errors
  
    if (!name || name.trim() === '') {
      formIsValid = false;
      errors['name'] = 'Ole hyvä ja lisää nimesi.';
    }
  
    // Basic email validation
    if (!email || email.trim() === '' || !email.includes('@')) {
      formIsValid = false;
      errors['email'] = 'Ole hyvä ja lisää sähköpostiosoitteesi.';
    }
  
    if (!message || message.trim() === '') {
      formIsValid = false;
      errors['message'] = 'Ole hyvä ja lisää viesti.';
    }

    if (!schedule || schedule.trim() === '') {
        formIsValid = false;
        errors['schedule'] = 'Ole hyvä ja anna jonkinlainen aikataulu.';
      }
  
    return { formIsValid, errors };
  };
  
  export default validateForm;  