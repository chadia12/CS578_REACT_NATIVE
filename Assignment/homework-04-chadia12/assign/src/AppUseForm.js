
import "./App.css";
import useForm from "./useForm";
function App() {
  const [formValues, handleChange] = useForm({ email: "", password: "" });
  return (
    <div className="App">
      <input
        name="email"
        placeholder="email"
        value={formValues.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formValues.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
