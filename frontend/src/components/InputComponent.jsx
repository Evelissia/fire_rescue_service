import { useState } from 'react';

const InputComponent = ({ type, className, placeholder, errors, onChange }) => {
  const [value, setValue] = useState('');

  const change = (e) => {
    console.log(e);
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <>
      <div className="form__group">
        <input
          value={value}
          type={type}
          required
          name={className}
          placeholder={placeholder}
          className={className}
          onChange={change}></input>
      </div>
      {errors && errors.length > 0 && <div className="errors">{errors}</div>}
    </>
  );
};

export default InputComponent;
