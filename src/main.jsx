import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Pages/Routes/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#0e193a] text-white">
    <div className="max-w-7xl mx-auto ">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </div>
);
