import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = {
      email,
      password,
      password2,
    };
  };

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
