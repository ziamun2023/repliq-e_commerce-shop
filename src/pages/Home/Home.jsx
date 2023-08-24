import React from 'react';
import Banner from '../../AllComponent/Banner/Banner';
import Popularproduct from '../../AllComponent/PopularProduct/Popularproduct';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
        {/* First banner section */}
        <section id="home" className="section  ">
        <button data-target="#service" className="downArrow text-center  p-20 absolute z-20 top-[530px] lg:top-[570px] ">down</button>
        <Banner/>
            
 
    </section>
    <section id="service" className="section lg:mt-0 mt-[260px]">
        <Popularproduct/>

    
    </section>
    {/* second section */}

    {/* <section id="service" className="section ">
        
        <section/> */}
         
        </>
    );
};

export default Home;

{/* <div className="grid lg:grid-cols-3 justify-items-center">
<div className="mx-4 my-10 relative">
    <img className="lg:h-[500px] lg:w-[400px] h-[330px] w-[280px] object-cover" src="./image/pexels-cliff-booth-4057177.jpg" alt=""/>
    <div className="lg:w-40 w-20 h-40 lg:h-64 absolute top-52 -left-10   lg:top-72 lg:-ms-20 bg-[rgb(200,162,214)]"></div>
</div>
<div>
    <p className="font1 lg:text-5xl text-2xl mx-4">Discover Your Fitness Oasis: Elevate Your Workouts with Expert Guidance</p>
    <p className="mt-6 tracking-wider mx-4">**"Unlock the Power of Professional Guidance: Section 2 invites you to embark on a fitness journey like no other. Immerse yourself in personalized workout plans, expert coaching, and a supportive community that propels your fitness goals forward. Elevate your sweat sessions with proven strategies for optimal results."**</p>

</div>
<div className="lg:mt-40 mt-10 lg:ms-40">
    <div className="w-20 h-20 -ms-20 bg-[rgb(200,162,214)]"></div>
    <img className="h-[300px] w-[200px] object-cover" src="./image/pexels-gleb-krasnoborov-2628215.jpg" alt=""/>
</div>

</div> */}