import addicon from "./../../assets/add.svg";
import {useCheckoutStore} from "../../Store/Cart";
import "./AddProduct.scss";
interface AddProductProps {
  id: string;
  title: string;
  price: number;
}

const AddProduct = ({id, title, price}: AddProductProps) => {
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
