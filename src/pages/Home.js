import React from 'react';

function Home() {
  return (
    <div>
      <header>Gourmet Delights</header>
      <div className='banner'>
        <h1>Welcome to Gourmet Delights</h1>
        <p>Explore the best food in town!</p>
      </div>
      <div className='categories'>
        <div className='category-card'>Home</div>
        <div className='category-card'>Food Items</div>
        <div className='category-card'>Cart</div>
        <div className='category-card'>Order</div>
      </div>
    </div>
  );
}

export default Home;
