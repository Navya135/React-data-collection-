import { useState } from "react";
import "./components/form.css";
import FormInput from "./components/FormInput";
import { useNavigate } from 'react-router-dom';

const FormData = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [ FormData, setFormData ] = useState(false);

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Date of Birth",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = () => {
    if(values.username && values.email && values.birthday && values.password && values.confirmPassword){
    navigate("/thankyou")
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit} style={{backgroundColor:"whitesmoke",border:"2px solid white",borderRadius:"20px"}}>
        <h3 style={{marginBottom:"20px",fontFamily: "Roboto",fontSize:"30px",fontWeight:500,marginLeft:"20px",marginTop:"15px",color:"#444444",fontFamily: "Roboto"}}>Registration Form</h3>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            style={{borderRadius:"20px"}}
          />
        ))}
        <button style={{width:"70%",marginLeft:"40px",fontFamily: "Roboto",borderRadius:"20px"}} onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default FormData;
