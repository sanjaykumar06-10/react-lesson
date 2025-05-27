import React, { useState, useContext, createContext } from "react";

// 1. Create Context
const UserContext = createContext();

export default function App21() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <UserContext.Provider value={{ users, setUsers, setMessage }}>
      <div style={styles.container}>
        <h1 style={styles.title}>User Auth App</h1>
        <div style={styles.forms}>
          <Register />
          <Login />
        </div>
        <p style={styles.welcome}>{message}</p>
      </div>
    </UserContext.Provider>
  );
}

// 2. Register Component
function Register() {
  const { users, setUsers } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    const existing = users.find((u) => u.email === email);
    if (existing) {
      alert("User already exists.");
      return;
    }

    setUsers([...users, { name, email, password }]);
    alert("Registered Successfully!");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.box}>
      <h3 style={styles.heading}>Register</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleRegister}>Submit</button>
    </div>
  );
}

// 3. Login Component
function Login() {
  const { users, setMessage } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setMessage(`Welcome ${user.name}`);
    } else {
      setMessage("Invalid credentials");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.box}>
      <h3 style={styles.heading}>Login</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleLogin}>Submit</button>
    </div>
  );
}

// 4. Updated Styles
const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center",
    padding: "40px",
    background: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "32px",
    color: "#333",
    marginBottom: "20px",
  },
  forms: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  box: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "25px",
    width: "280px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    marginBottom: "15px",
    color: "#444",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "12px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  welcome: {
    marginTop: "30px",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#333",
  },
};
