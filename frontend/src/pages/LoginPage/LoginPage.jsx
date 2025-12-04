import { useState } from "react";

export const LoginPage = () => {
  const [mode, setMode] = useState("login"); // "login" або "register"

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!values.email) {
      newErrors.email = "Email обов’язковий";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Невірний формат email";
    }

    // Password
    if (!values.password) {
      newErrors.password = "Пароль обов’язковий";
    } else if (values.password.length < 6) {
      newErrors.password = "Мінімум 6 символів";
    }

    // Confirm password only in register mode
    if (mode === "register") {
      if (!values.confirmPassword) {
        newErrors.confirmPassword = "Підтвердіть пароль";
      } else if (values.confirmPassword !== values.password) {
        newErrors.confirmPassword = "Паролі не співпадають";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (mode === "login") {
      console.log("Logging in with:", values);
    } else {
      console.log("Registering with:", values);
    }
  };

  return (
    <div style={{ width: "300px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h2>{mode === "login" ? "Вхід" : "Реєстрація"}</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* Password */}
        <label>Пароль</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        {/* Confirm password only for register */}
        {mode === "register" && (
          <>
            <label>Підтвердження пароля</label>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword}</p>
            )}
          </>
        )}

        <button type="submit" style={{ marginTop: "10px", width: "100%" }}>
          {mode === "login" ? "Увійти" : "Зареєструватися"}
        </button>
      </form>

      <div style={{ marginTop: "10px" }}>
        {mode === "login" ? (
          <p>
            Немає акаунта?{" "}
            <button onClick={() => setMode("register")}>Створити</button>
          </p>
        ) : (
          <p>
            Вже маєте акаунт?{" "}
            <button onClick={() => setMode("login")}>Увійти</button>
          </p>
        )}
      </div>
    </div>
  );
}
