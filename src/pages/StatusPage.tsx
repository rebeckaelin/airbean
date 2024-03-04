import "./styles/StatusPage.scss";
import drone from "./../assets/drone.svg";
import {useNavigate} from "react-router-dom";

const StatusPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <>
      <article className="status-page">
        <p className="status-page__ordernumber">
          Ordernummer: <span>#12DV23F</span>
        </p>
        <img src={drone} alt="" />
        <h1 className="status-page__ordertext">
          Din beställning <br /> är på väg
        </h1>
        <p className="status-page__minutes">
          <span>13</span> minuter
        </p>
        <button className="status-page__button" onClick={() => handleClick()}>
          Ok, cool!
        </button>
      </article>
    </>
  );
};

export default StatusPage;
