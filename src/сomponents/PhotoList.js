import React from 'react';

const photos = [
  {
    albumId: 1,
    id: 1,
    title: "green",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "purple",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
];

const PhotoList = () => {
  return (
    <div>
      <h2>Photo List</h2>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoList;
