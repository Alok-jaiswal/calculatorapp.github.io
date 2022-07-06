import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVR8HMZRcRKYhh75xZ2ycia0yWl0Rk0yyvw&usqp=CAU" alt="logo" height={50} width={50} className="m-2" />
        <ul className="d-flex flex-row mb-3 list-unstyled ">
          <li className=" m-2">
            <NavLink to="/" className="text-decoration-none">
              Home
            </NavLink>
          </li>
          <li className=" m-2">
            <NavLink to="/calculator" className="text-decoration-none">
              Calculator
            </NavLink>
          </li>
          <li className=" m-2">
            <NavLink to="/sipcalculator" className="text-decoration-none">
              SIP Calculator
            </NavLink>
          </li>
          <li className=" m-2">
            <NavLink to="/agecalculator" className="text-decoration-none">
              Age Calculator
            </NavLink>
          </li>
          <li className=" m-2">
            <NavLink to="/cagrcalculator" className="text-decoration-none">
              CAGR Calculator
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
