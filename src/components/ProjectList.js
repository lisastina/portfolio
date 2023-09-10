import React from "react";

const ProductList = ({ products }) => {
  const productsTest = [
    { name: "fotobok", img: "/assets/fotobok_01.jpg" },
    { name: "fotobok2", img: "/assets/fotobok_01.jpg" },
    { name: "fotobok3", img: "/assets/fotobok_01.jpg" },
    { name: "fotobok4", img: "/assets/fotobok_01.jpg" },
  ];
  return (
    <div className="projectList">
      <ul>
        {productsTest?.map((product) => {
          return (
            <li key={product.name} className="projectList__image">
              <img src={product.img} alt={product.name} />
            </li>
          );
        })}
      </ul>
      {/* <div className="projectList__bird">
        <img src="/assets/bird.png" alt="bird" />
      </div> */}
    </div>
  );
};

export default ProductList;
