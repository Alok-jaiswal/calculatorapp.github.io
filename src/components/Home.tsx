import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Link to="/calculator">
        <img
          src="https://c1.wallpaperflare.com/preview/794/281/211/businessman-pay-calculator-intelligent.jpg"
          style={{ height: "100vh", width: "98.5vw", borderRadius: "16px" }}
          alt="home_img"
        />
      </Link>
    </div>
  );
};

export default Home;
