import { useState, useEffect } from "react";
import axios from "axios";

// import { ExpenseForm, ExpenseList, ExpenseChart } from "./components";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseChart from "./components/ExpenseChart/ExpenseChart";

const API_URL = "http://localhost:8000/api/expenses/";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => setExpenses(response.data));
  }, []);

  return <div>
    <ExpenseChart />
    <ExpenseForm />
    <ExpenseList />
  </div>;
};

export default App;