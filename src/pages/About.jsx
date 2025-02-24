import React, { useEffect } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
const About = () => {

  useEffect(()=>{
window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
            soluta nemo autem, architecto, sequi provident iste voluptas
            mollitia similique corporis! Exercitationem in cupiditate ipsa,
            possimus facere dolor eveniet maxime.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
            sapiente inventore perferendis temporibus earum aperiam! Maiores
            sapiente placeat, tempore repellat, consequatur pariatur cumque
            consectetur, quidem facilis illo magni? Odio, vero.
          </p>
          <b className="text-gray-800">Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim
            nisi hic ipsam ducimus impedit nemo architecto maiores voluptas quia
            voluptates consectetur atque cupiditate dolores perspiciatis,
            laboriosam cumque, commodi ipsa.
          </p>
        </div>
      </div>
      <div className="text-xl text-center py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border py-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance </b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border py-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience </b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border py-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
