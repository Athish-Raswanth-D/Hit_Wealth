import React from 'react';
import './Learning.css';

const Learning = () => {
  const learningData = [
    {
      type: 'video',
      title: 'Stock Market Basics',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://www.youtube.com/watch?v=example',
    },
    {
      type: 'book',
      title: 'The Intelligent Investor',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://www.example.com/the-intelligent-investor',
    },
    {
      type: 'video',
      title: 'Understanding Mutual Funds',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://www.youtube.com/watch?v=example2',
    },
    {
      type: 'book',
      title: 'Rich Dad Poor Dad',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://www.example.com/rich-dad-poor-dad',
    },
  ];

  return (
    <div className="container">
      <h2 className="section-h text-robin-blue text-center">Learn Stocks and Investments</h2>
      <div className="grid">
        {learningData.map((item, index) => (
          <div key={index} className="card translate-effect">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.thumbnail} alt={item.title} className="img-cover" />
              <div className="card-content">
                <h3 className="text text-black">{item.title}</h3>
                <p className="text-grey">{item.type === 'video' ? 'Video' : 'Book'}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
