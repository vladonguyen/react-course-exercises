import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');

  // function handleEmail(event) {
  //   setEnteredEmail(event.target.value)
  // }

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsValid = 
  didEdit.email && !enteredValues.email.includes('@');

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit(prevEdit=> ({
      ...prevEdit, [identifier]: false
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted", enteredValues);

    setEnteredValues({
      email: "",
      password: "",
    });
  }

  

  function handleInputBlur(identifier){
    setDidEdit(prevEdit=> ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onBlur={()=> handleInputBlur('email')}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          {emailIsValid && <p>Invalid email</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
