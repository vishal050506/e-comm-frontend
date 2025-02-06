import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { products } from "../assets/assets";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Rs.";
  const deliveryFee = 50; // Renamed for convention
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  // const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate();

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
   }
    if (size === "Custom Fit") {
      toast.info(
        "Custom size selected. Please provide measurements in the cart section."
      );
    }

    let cartData = { ...cartItems }; // Use spread operator for shallow cloning

    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((count, item) => {
      return count + Object.values(item).reduce((acc, qty) => acc + qty, 0);
    }, 0);
  };

  const updateQuantity = (itemId, size, quantity) => {
    const cartData = { ...cartItems };
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      if (itemInfo) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        }
      }
    }
    return totalAmount;
  };

  // const getproductsdata = async () => {
  //   try {
  //     const response = await axios.get(backendUrl + "/api/product/list");
  //     // console.log(response.data);
  //     if (response.data.success) {
  //       setProducts(response.data.products);
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getproductsdata();
  // }, []);

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
