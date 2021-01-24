import React,{ Suspense }  from "react";
import HomeIn from "./homeslide";
import Banners from "./banners";

const DailyDeals = React.lazy(() => import('./dailyoffer'));

function Home () {
  return (
    <>
    <HomeIn />
    <Banners />
    <Suspense fallback={<div>Loading...</div>}>
    <DailyDeals />
    </Suspense>
     </>
    );
}
export default Home;