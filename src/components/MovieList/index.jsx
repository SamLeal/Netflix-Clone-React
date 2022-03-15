import React, { useState } from "react";
import './MovieList.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default ({title, items}) => {
    const [scrollX, setScrollX]  = useState(-480);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0) {
            x=0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = items.results.length * 150;
        if(window.innerWidth - listW > x) {
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x);
    }

    return (
        <div className="movieList">
            <h2 className="movieList--h2">{title}</h2>
            <div className="movieList--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieList--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="movieList--area">
                <div className="movieList--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                    }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieList--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="{item.original_title}" key={key}/>  
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}