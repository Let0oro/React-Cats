import * as React from 'react';

interface CardProps {
  height: number;
  id: string;
  url: string;
  width: number;
}

export const Card = ({ height, id, url, width }: CardProps) => {
  return (
    <>
      <div className="card--container">
        <img src={url} alt={id} width={width} height={height} />
      </div>
    </>
  );
};
