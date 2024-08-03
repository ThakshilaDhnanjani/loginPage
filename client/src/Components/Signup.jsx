import React from "react";
import "../App.css";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/signup", {
      username,
      email,
      password,
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  };
  
  return (
    <div className="sign-up-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="*****"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
