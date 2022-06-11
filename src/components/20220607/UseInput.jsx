import { useState, useCallback } from 'react';

const useInput = defaultForm => {
  const [form, setForm] = useState(defaultForm);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  },[]);

  const reset = useCallback(() => {
    setForm(defaultForm);
  }, [])

  return [form, onChange, reset];
};

export default useInput;