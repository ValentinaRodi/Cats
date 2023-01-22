import { useState, useEffect } from "react";
import Card from '../components/Card';
import cats from '../bakend/bakend';

const colorSelect = '#D91667';
const colorSelectHover = '#E52E7A';

const Main = () => {
    const [colorSelected, setColorSelected]=useState([]);
    const [textHover, setTextHover]=useState([]);
    const [stock, setStock]=useState([]);
    
    const text = [];
    const catsArray = [];
    const stockArray =[];

    cats.forEach((i)=> {
        text.push('Сказочное заморское яство');
        catsArray.push(false);
        stockArray.push(i.stock);
    });

    useEffect(() => {
        setColorSelected(catsArray);
        setStock(stockArray);
        setTextHover(text);
    }, []);

    const handlerClickSelected = (e) => {
        
        const idItem = +e.currentTarget.id

        for (let i = 0; i < colorSelected.length; i++) {
    
            if (i === idItem) {
                (colorSelected[i] === false) ? colorSelected[i] = colorSelect : colorSelected[i] = false;
                
                if(colorSelected[i] === false) {
                    textHover[i] = 'Сказочное заморское яство';
                }
            }
        }
        setColorSelected([...colorSelected]);
        setTextHover([...textHover]);
    };

    const handleMouseEnter = (e) => {
        const idItem = +e.currentTarget.id

        for (let i = 0; i < colorSelected.length; i++) {
    
            if (i === idItem) {
                (colorSelected[i] !== false) ? colorSelected[i] = colorSelectHover : colorSelected[i] = false;
                (colorSelected[i] !== false) ? textHover[i] = 'Котэ не одобряет?' : textHover[i] = 'Сказочное заморское яство';
            }
        }
        setColorSelected([...colorSelected]);
        setTextHover([...textHover]);
    };

    const handleMouseLeave = (e) => {
        const idItem = +e.currentTarget.id

        for (let i = 0; i < colorSelected.length; i++) {
    
            if (i === idItem) {
                (colorSelected[i] !== false) ? colorSelected[i] = colorSelect : colorSelected[i] = false;
                textHover[i] = 'Сказочное заморское яство';
            }
        }
        setColorSelected([...colorSelected]);
        setTextHover([...textHover]);
    };

    return (
        <div className='main'>
            <h2>Ты сегодня покормил кота?</h2>
            <div className="layout-3-column-wrap">
                {cats.map((cat, i) => {
                    return (
                    <Card 
                        id={i}
                        key={i}
                        onClick={handlerClickSelected}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        // classNameCard={(stock === true) ? 'card__block' : 'card__block card_none'}
                        styleColor={(colorSelected[i] !== false) ? {color:colorSelectHover} : null}
                        styleBackground={{background:colorSelected[i]}}
                        classNameLink={(colorSelected[i] === false) ? 'link' : 'link link_selected'}
                        menu={cat.menu} 
                        stock={cat.stock}
                        blokText={textHover[i]}
                        quantity={cat.quantity} 
                        present={cat.present} 
                        like={cat.like} 
                        kg={cat.kg}
                        selectedText={(colorSelected[i] !== false) ? cat.selected : null}
                        classNameCard={(stock[i] === false) ? 'card__block card_none' 
                        : (colorSelected[i] === false) ? 'card__block' : 'card__block card_selected'}
                    />)
                })}
            </div>
        </div>
    );
};
  
export default Main;