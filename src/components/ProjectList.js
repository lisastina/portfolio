import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  const productsTest = [
    { name: "fotobok", img: "/assets/fotobok_01.jpg" },
    { name: "fotobok2", img: "/assets/fotobok_01.jpg" },
    { name: "fotobok3", img: "/assets/fotobok_01.jpg" },
    { name: "fotobok4", img: "/assets/fotobok_01.jpg" },
    { name: "fotobok5", img: "/assets/fotobok_01.jpg" },
  ];
  return (
    <ul className="projectList">
      {productsTest?.map((product) => {
        return (
          <li className="projectList__image" key={product.name}>
            <Link to="/projekt">
              <img key={product.name} src={product.img} alt={product.name} />
            </Link>
          </li>
        );
      })}

      <figure className="projectList__bird">
        <img src="/assets/bird.png" alt="bird" />
      </figure>
    </ul>
  );
};

export default ProductList;
