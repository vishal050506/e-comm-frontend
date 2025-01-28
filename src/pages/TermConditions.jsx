import React, { useEffect } from "react";
import Title from "../components/Title";
const TermConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 md:px-8 lg:px-16 py-6">
      <div className="text-center text-3xl ">
        <Title text1={"TERMS &"} text2={"CONDITIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          We value and share your concerns about your privacy and security. By
          visiting us, the user has agreed to read, browse and access all our
          information subject to the guidelines and terms of use applicable to
          such services. If it is not acceptable, kindly refrain from accessing
          or visiting our Site.
        </p>
      </div>
      <div className="mt-8">
        <p className="text-lg md:text-xl text-gray-800 mt-4 ">
          1. WE SHIP WORLDWIDE!
        </p>
        <p className="text-sm md:text-base text-gray-600 mt-4 ">
          All content included on this site, such as text, graphics, logos,
          button icons, images, audio clips, digital downloads, data
          compilations, and software, is the property of Heenakochhar.com. Any
          violation, illegal or unauthorised usage of our trademarks, whether
          registered or under registration, will be liable for legal action.
        </p>

        <div className="mt-12">
          <hr className="border-gray-300" />
          <p className="text-lg md:text-xl text-gray-800 mt-4 ">
            2. SIZE, FIT AND COLOR
          </p>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            The fit of our products depends on the cut, fabric and style of each
            product. Some products are designed to have a loose, relaxed fit
            while others are more fitted. Please refer to our sizing chart to
            select the best size that suits you. While we have made every effort
            to display as accurately as possible the colors of the products that
            appear on the Site, we cannot guarantee that your monitor or
            screen’s display of any color will be completely accurate, as
            computer monitors and screens of electronic devices vary. Further,
            colors might vary in pictures than actual products.
          </p>
        </div>
        <div className="mt-12">
          <hr className="border-gray-300" />
          <p className="text-lg md:text-xl text-gray-800 mt-4 ">3. DELIVERY</p>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            Product will be delivered in 35 – 40 days depending on the outfit
            ordered. For urgent deliveries/queries, please contact us directly.
            Please note that deliveries can be affected in case we do not
            receive any of the below information on time :
          </p>
          <p className="text-sm md:text-base text-gray-600">Information :</p>
          <ol className="text-sm md:text-base text-gray-600 my-2">
            <li>1. Complete payment is not received</li>
            <li>2. Incorrect/inaccurate address details</li>
            <li>3. Measurements</li>
            <li>
              4. No response from the customer Please note that we try our best
              in ensuring that the product reaches you within time. In order to
              fasten our process, we have tied up with several third party
              vendors for quicker deliveries. However, in case of delay from a
              third party, we do not take any responsibility.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TermConditions;
