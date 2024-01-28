import React from "react";
import Container from "./Container";

const Navber = () => {
  return (
    <>
      <Container>
        <div className="flex items-center justify-between mt-[40px]  ">
          <img src="Frame.png" alt="" />

          <ul className="flex justify-center items-center gap-[50px]">
            <li>Home</li>
            <li>Recipe</li>
            <li>Community</li>
            <li>About Us</li>
            
          </ul>
        </div>

        
      </Container>
    </>
  );
};

export default Navber;
