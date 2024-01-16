import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { TodoProvider } from "./providers/TodoContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <App />   
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
