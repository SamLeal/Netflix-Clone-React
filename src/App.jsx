import { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';

import MovieList from './components/MovieList/index.jsx';
import FeaturedMovie from './components/FeaturedMovie/index.jsx';
import Header from './components/Header/index.jsx';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader]= useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      let list  = await Tmdb.getHomeList();
      setMovieList(list);

      let originals =  list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo =  await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () =>  {
      if(window.scrollY > 150) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className='lists'>
      {movieList.map((item, key)=>(
          <MovieList key={key} title={item.title} items={item.items}/>
        ))}  
      </section>

      <footer>
        <p> Clone Netflix feito por "Samuel Leal" acompanhando um video de b7web.</p>
        <p> Utilizando a API Themoviedb.org</p>
      </footer>
      {movieList.length <= 0 && 
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
      </div>
      }
      
    </div>
  );
}

