import "./styles/StatusPage.scss";
import drone from "./../assets/drone.svg";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useCheckoutStore} from "../Store/Cart";

const StatusPage = () => {
  const {orderNumber} = useCheckoutStore();
  const [eta, setEta] = useState(0);
  const navigate = useNavigate();

  const fetchETA = async () => {
    if (!orderNumber) {
      return;
    }

    try {
      const url = `https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/${orderNumber}`;
      const res = await fetch(url);
      const data = await res.json();
      setEta(data.eta);
    } catch (error) {
      // console.error("Error fetching ETA:", error);
    }
  };

  useEffect(() => {
    fetchETA();
  }, [orderNumber]);

  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <>
      <article className="status-page">
        <p className="status-page__ordernumber">
          Ordernummer: <span>{orderNumber}</span>
        </p>
        <img src={drone} alt="" />
        <h1 className="status-page__ordertext">
          Din beställning <br /> är på väg
        </h1>
        <p className="status-page__minutes">
          <span>{eta}</span> minuter
        </p>
        <button className="status-page__button" onClick={() => handleClick()}>
          Ok, cool!
        </button>
      </article>
    </>
  );
};

export default StatusPage;
