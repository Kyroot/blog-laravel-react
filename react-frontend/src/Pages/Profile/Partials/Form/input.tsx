import React, { forwardRef, HTMLProps } from 'react';

interface InputFieldProps extends HTMLProps<HTMLInputElement> {}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
    
  return <input {...props} ref={ref} />;
});

export default InputField;
