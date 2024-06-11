import { useState } from 'react';

const useForm = ({ resolver, onSubmit }) => {
  const [message, setMessage] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    let errors = {};

    if (resolver) {
      errors = resolver(formValues);
    }

    if (Object.keys(errors).length) {
      setMessage(errors);
      return;
    }

    onSubmit(formValues);
    event.target.reset();
    setMessage({});
  };

  return {
    handleSubmit,
    message,
  };
};

export default useForm;
