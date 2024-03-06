import {create} from "zustand";

interface Checkout {
  cart: Item[];
  cartCount: number;
  totalSum: number;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  addToCart: (item: Item) => void;
}
interface Item {
  title: string;
  price: number;
  id: string;
  quantity: number;
  itemSum: number;
}

export const useCheckoutStore = create<Checkout>((set) => ({
  cart: [],
  cartCount: 0,
  totalSum: 0,

  addToCart: (item) => {
    set((state) => {
      let updatedCart = [...state.cart]; //skapar en kopia på cart
      let index = updatedCart.findIndex((cartItem) => cartItem.id === item.id); //hittar objektet som har samma id som item.id.

      if (index !== -1) {
        //om index inte är -1 finns objektet redan i arrayen..
        updatedCart[index].quantity += 1; //..då adderar vi 1 till kvantiteten.
        updatedCart[index].itemSum =
          updatedCart[index].quantity * updatedCart[index].price; // lägger sedan ihop pris*kvantitet.
      } else {
        updatedCart.push({...item, quantity: 1, itemSum: item.price * 1}); //om index är -1 så lägger vi till objektet samt kvantitet och pris.
      }
      //funktion för totalen av items i varukorgen (displayas i den orangea rutan)
      let totalCount = updatedCart.reduce(
        (total, cartItem) => total + Number(cartItem.quantity), //lägger ihop nuvarande summan plus antalen på alla items man lagt till.
        0
      );
      //funktion för att beräkna den totala summan i varukorgen
      let totalSum = updatedCart.reduce(
        (total, cartItem) => total + cartItem.itemSum, //lägger ihop nuvarande totalsumman med itemsumman. 0 är initialt värde.
        0
      );

      return {cart: updatedCart, cartCount: totalCount, totalSum: totalSum};
    });
  },

  increaseQuantity: (id) => {
    return set((state) => {
      let updatedCart = [...state.cart];
      let index = updatedCart.findIndex((cartItem) => cartItem.id === id);
      if (index !== -1) {
        updatedCart[index].quantity += 1; //..då adderar vi 1 till kvantiteten.
        updatedCart[index].itemSum =
          updatedCart[index].quantity * updatedCart[index].price;
      }
      //funktion för totalen av items i varukorgen (displayas i den orangea rutan)
      let totalCount = updatedCart.reduce(
        (total, cartItem) => total + Number(cartItem.quantity), //lägger ihop nuvarande summan plus antalen på alla items man lagt till.
        0
      );
      //funktion för att beräkna den totala summan i varukorgen
      let totalSum = updatedCart.reduce(
        (total, cartItem) => total + cartItem.itemSum, //lägger ihop nuvarande totalsumman med itemsumman. 0 är initialt värde.
        0
      );

      return {cart: updatedCart, cartCount: totalCount, totalSum: totalSum};
    });
  },

  decreaseQuantity: (id) => {
    return set((state) => {
      let updatedCart = [...state.cart];
      let index = updatedCart.findIndex((cartItem) => cartItem.id === id);
      if (index !== -1) {
        updatedCart[index].quantity -= 1;
        if (updatedCart[index].quantity === 0) {
          updatedCart.splice(index, 1);
        } else {
          updatedCart[index].itemSum =
            updatedCart[index].quantity * updatedCart[index].price;
        }
      }
      //funktion för totalen av items i varukorgen (displayas i den orangea rutan)
      let totalCount = updatedCart.reduce(
        (total, cartItem) => total + Number(cartItem.quantity), //lägger ihop nuvarande summan plus antalen på alla items man lagt till.
        0
      );
      //funktion för att beräkna den totala summan i varukorgen
      let totalSum = updatedCart.reduce(
        (total, cartItem) => total + cartItem.itemSum, //lägger ihop nuvarande totalsumman med itemsumman. 0 är initialt värde.
        0
      );

      return {cart: updatedCart, cartCount: totalCount, totalSum: totalSum};
    });
  },
}));
