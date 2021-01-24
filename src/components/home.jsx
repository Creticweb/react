import React,{ Suspense }  from "react";
import HomeIn from "./homeslide";
import Banners from "./banners";

const DailyDeals = React.lazy(() => import('./dailyoffer'));

function Home () {
  return (
    <>
    <HomeIn />
    <DailyDeals />
    <Suspense fallback={<div>Loading...</div>}>
    <Banners />
    </Suspense>
     </>
    );
}
export default Home;