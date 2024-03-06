import addicon from "./../../assets/add.svg";
import {useCheckoutStore} from "../../Store/Cart";
import "./AddProduct.scss";

const AddProduct = ({id, title, price}) => {
  const {addToCart} = useCheckoutStore();

  return (
    <img
      className="add-icon"
      src={addicon}
      alt=""
      onClick={() => {
        addToCart({id, title, price});
      }}
    />
  );
};

export default AddProduct;
