import React from "react";
// import "./Register.module.css";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import pharmacy from "../../assets/images/Diagram - Pharmacy1.png";
import company from "../../assets/images/Diagram - company1.png";
import hospital from "../../assets/images/Diagram - hospital1.png";
import HeaderLogin from "../Header/Header";
function SignUp() {
  const dispatch = useDispatch();
  const handleSubmitForm = (e) => {
    const userDataInfo = {
      type: e,
    };
    dispatch({ type: "Add_User_info", payload: userDataInfo });
  };
  return (
    <div>
      <HeaderLogin />
      <div className="parent">
        <div className="login-card">
          <div
            className="card"
            style={{ width: "23rem", padding: "10px 25px" }}
          >
            <form>
              <Link to="/signupTwo">
                <button
                  className="bg-body-tertiary border-0 my-3 btn-focus"
                  onClick={() => handleSubmitForm("pharmacy")}
                  type="submit"
                >
                  <img src={pharmacy} className="card-img-top" alt="pharmacy" />
                </button>
              </Link>
              <Link to="/signupThree">
                <button
                  className="bg-body-tertiary border-0 my-3 btn-focus"
                  onClick={() => handleSubmitForm("company")}
                  type="submit"
                >
                  <img src={company} className="card-img-top" alt="company" />
                </button>
              </Link>
              <Link to="/signupFour">
                <button
                  className="bg-body-tertiary border-0 my-3 btn-focus"
                  onClick={() => handleSubmitForm("hospital")}
                  type="submit"
                >
                  <img src={hospital} className="card-img-top" alt="hospital" />
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
