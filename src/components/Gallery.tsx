import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card } from './Card';

export type ResponseObject = {
  height: number;
  id: string;
  url: string;
  width: number;
};

const Gallery = () => {
  const URL = 'https://api.thecatapi.com/v1/images/search';
  const [imgs, setImgs] = useState<ResponseObject | null>(null);

  const responseApiCall = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setImgs(data[0]);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    responseApiCall();
  }, []);

  return (
    <>
      {imgs && <Card url={imgs.url} id={imgs.id} width={imgs.width} height={imgs.height} />}
      <button className="gallery--button" onClick={() => responseApiCall()}>Next 😸❤️</button>
    </>
  );
};

export default Gallery;
