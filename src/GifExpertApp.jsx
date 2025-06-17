import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Hunter X"]);

  //Funcion para agregar una nueva categoria
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;



    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GIPHYimpostor👾</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
      <footer className="footer">
        <p className="copyright">© 2025 GIPHYimpostor. Todos los derechos reservados.</p>
        <p className="attribution">
          GIFs proporcionados por <a href="https://giphy.com" target="_blank" rel="noopener noreferrer">GIPHY</a>
        </p>
      </footer>

    </>
  );
};
