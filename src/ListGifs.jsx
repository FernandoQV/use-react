import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getFetch from "./services/getFetch";
import './ListGifs.css'
const ListGifs = ({ params }) => {
  console.log(params)
  const {keyword}=params
  console.log(keyword)
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getFetch( keyword ).then((gifs) => setGifs(gifs));
  }, [keyword]);
  return (
    <section className='gifs'>
      {gifs.map(({ id, url, title }) => (
        <Gif key={id} id={id} url={url} title={title} />
      ))}
    </section>
  );
};

export default ListGifs;
