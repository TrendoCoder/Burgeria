import React from "react";
import { images } from "../../constants";
import "./Chef.css";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding ">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Cheif's Word" />
      <h1 className="headtext__cormorant">What We Beleive In</h1>
      <div className="app__cheif-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda iste eaque nemo ullam dolore autem? Sapiente sequi, sed distinctio reiciendis ipsum maiores porro? Deleniti possimus aperiam reprehenderit ratione incidunt fugit suscipit, doloremque amet atque, nobis veniam natus? Fugiat eveniet obcaecati nulla assumenda et alias libero necessitatibus distinctio tempora quia.</p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Lou</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="Sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
