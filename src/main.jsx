import BrowserRouter from "react-router-dom/BrowserRouter";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);
