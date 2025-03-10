import { useState } from "react";

export default function Login() {

  // const [enteredEmail, setEnteredEmail] = useState('');

  // function handleEmail(event) {
  //   setEnteredEmail(event.target.value)
  // }

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [isValid, setIsValid] = useState({
    email: true,
    password: true
  });


  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))
  }

  function handleValidation(identifier) {
  if(identifier === 'email' 
    && enteredValues.email !== ""
  && enteredValues.email.includes("@") === false){
    setIsValid(prev => ({...prev, email: false}))
  }
  }

  function handleResetValid(identifier){
    setIsValid((prevValues)=> ({...prevValues, [identifier]: true}))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('submitted', enteredValues);

    setEnteredValues({
      email: '',
      password: ''
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredValues.email} 
          onBlur={(event) => handleValidation("email")} 
          onChange={(event) => handleInputChange("email", event.target.value)} 
          onFocus={()=> handleResetValid("email")}/>
          {!isValid.email && <p>Not a valid email.</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enteredValues.password} onChange={(event) => handleInputChange('password', event.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
