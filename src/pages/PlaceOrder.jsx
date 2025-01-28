import React, { useContext } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* -------------------Left Side-------------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVEREY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            type="text"
            placeholder="Last name (optional)"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email-address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          required
        />
        <input
          type="text "
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          required
        />
        <input
          type="text "
          placeholder="Apartment (optional)"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            required
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          required
        />
      </div>

      {/* ---------------Righ-Side---------------- */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12 ">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ---------------Payment-Method Selection---------------- */}
          <div className="mt-6 p-4 border rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold">Payment</h2>
            <p className="text-sm text-gray-600 mt-1">
              All transactions are secure and encrypted.
            </p>

            <div className="mt-4 border border-blue-500 rounded-md p-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="font-medium text-gray-700 text-center md:text-left">
                  Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                </p>
                <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4">
                  <img src={assets.upi_icon} alt="UPI" className="w-8 h-8" />
                  <img src={assets.visa_logo} alt="Visa" className="w-8 h-8" />
                  <img
                    src={assets.mastercard_logo}
                    alt="Mastercard"
                    className="w-8 h-8"
                  />
                  <img
                    src={assets.bank_logo}
                    alt="NetBanking"
                    className="w-8 h-8"
                  />
                  <button className="w-8 h-8 text-gray-600 border border-gray-300 rounded-full flex items-center justify-center text-sm font-semibold">
                    +1
                  </button>
                </div>
              </div>

              <div className="mt-4 bg-gray-100 p-4 rounded-md flex flex-col items-center">
                <div className="flex-shrink-0 w-12 h-12 border rounded-lg flex items-center justify-center bg-white">
                  <img src={assets.icons_payment} alt="" />
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                  After clicking <span className="font-medium">“Pay now”</span>,
                  you will be redirected to Razorpay Secure (UPI, Cards,
                  Wallets, NetBanking) to complete your purchase securely.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/order")}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
