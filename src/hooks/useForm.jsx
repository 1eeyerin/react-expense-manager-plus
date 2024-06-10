import { useRef, useState } from 'react';

const useForm = ({ resolver, onSubmit }) => {
  const formRef = useRef(null);
  const [message, setMessage] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
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
    formRef.current.reset();
    setMessage({});
  };

  return {
    handleSubmit,
    formRef,
    message,
  };
};

export default useForm;
