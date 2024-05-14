import React, { useState } from 'react'
import TopHeader from '../components/Home/TopHeader';
import ExploreMenu from '../components/Home/ExploreMenu';
import FoodDisplay from '../components/FoodItems/FoodDisplay';


const HomePage = () => {
  const [category, setCategory] = useState("All");

  return (
    <>    
      <TopHeader />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </>
  );
}

export default HomePage
