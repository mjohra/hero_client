import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import DriverRegistration from "./Pages/SignUp/Driver/DriverRegistration/DriverRegistration";
import LeanerRegistraton from "./Pages/SignUp/Learner/LearnerRegistration/LeanerRegistraton";
import Login from "./Pages/SignUp/Login/Login";
import Admin from "./Pages/Admin/Admin/Admin";
import Rider from "./Pages/Admin/Rider/Rider";
import Learner from "./Pages/Admin/Learner/Learner";
import RiderDashboard from "./Pages/Dashboard/Rider/RiderDashboard";
import LearnerDashboard from "./Pages/Dashboard/Learner/LearnerDashboard";
import Payment from "./Pages/Dashboard/Learner/Payment";
import UserLogin from "./Pages/SignUp/UserLogin/UserLogin";
import LearnerLogin from "./Pages/SignUp/UserLogin/LearnerLogin";
import AdminRoute from "./Pages/SignUp/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/register"
              element={<DriverRegistration></DriverRegistration>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/user_login" element={<UserLogin></UserLogin>}></Route>
            <Route
              path="/learner_login"
              element={<LearnerLogin></LearnerLogin>}
            ></Route>
            <Route
              path="/rider_dash"
              element={<RiderDashboard></RiderDashboard>}
            ></Route>
            <Route
              path="/learner_dash"
              element={<LearnerDashboard></LearnerDashboard>}
            ></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route
              path="/payment/packageId"
              element={<Payment></Payment>}
            ></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route
              path="/rider"
              element={
                <AdminRoute>
                  <Rider></Rider>
                </AdminRoute>
              }
            ></Route>
            <Route path="/learner" element={<AdminRoute> <Learner></Learner></AdminRoute>}></Route>
            <Route
              path="/learner_register"
              element={<LeanerRegistraton></LeanerRegistraton>}
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>

      {/* <Header></Header> */}
    </div>
  );
}

export default App;
