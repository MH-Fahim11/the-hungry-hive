import React, { Suspense } from 'react';
import Header from '../Shared/Header';
// import Chef from '../Chef/Chef';
import Hero from '../Shared/Hero';
const Chef = React.lazy(() => import("../Chef/Chef"));
import { Blocks } from "react-loader-spinner";
import NewsLetter from '../Shared/NewsLetter';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Suspense fallback={<Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />}>
				<Chef></Chef>
			</Suspense>
            
            <Hero></Hero>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;