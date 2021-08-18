import { useState } from "react";
import "./MovieRow.css";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

// Aqui já recebemos no MovieRow as propriedades que ele espera;
// Assim conseguimos fazer as coisas funcionarem
export const MovieRow = ({ title, items }) => {

  const [scrollX, setScrollX]= useState(0);

  // Criando uma função de setas para movimentação de items
  // LEFT
  const handleLeftArrow = () => {
      let x = scrollX + Math.round(window.innerWidth / 2);
      if(x > 0){
          x = 0;
      }
      setScrollX(x);
  }

  //RIGHT
  const handleRightArrow = () =>{
      let x = scrollX - Math.round(window.innerWidth / 2);
      let listW = items.results.length * 150;
      if(window.innerWidth - listW > x)
      {
          x = (window.innerWidth - listW) - 60;
      }
      setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBefore style={{fontSize: 50}}/>
      </div>

      <div className="movieRow--right">
        <NavigateNext style={{fontSize: 50}} onClick={handleRightArrow}/>
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{marginLeft: scrollX,
        width: items.results.length * 150
        }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
