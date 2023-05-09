import React from 'react';

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (link, width, height) => `/public${link}/${width}x${height}`;

const unsplashPhotos = [
  { id: 1, link: "/daave.jpg", width: 1080, height: 800 },
  { id: 2, link: "/dorrel.jpg", width: 1080, height: 1620 },
  { id: 3, link: "/sarah.jpg", width: 1080, height: 720 },
];

const Photos = () => {
  return unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return (
      <div key={photo.id}>
        <img src={unsplashLink(photo.link, width, height)} alt="Unsplash Image" />
      </div>
    );
  });
};

export default Photos;

