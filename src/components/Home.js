import React, { useState } from 'react';
import { SearchAll } from '../pages/SearchAll';
import { Hotels } from '../pages/Hotels';
import { ThingsTo } from '../pages/ThingsTo';
import { Restaurant } from '../pages/Restaurant';
import { Vacaation } from '../pages/Vacaation';
import { FaSearch } from 'react-icons/fa';
import mobile from '../Images/mobile.png';
import c1 from '../Images/c1.jpg';
import c2 from '../Images/c2.jpg';
import c3 from '../Images/c3.jpg';
import c4 from '../Images/c4.jpg';
import trip1 from '../Images/trip1.jpg'
import trip2 from '../Images/trip2.jpg'
import trip3 from '../Images/trip3.jpg'
import trip4 from '../Images/trip4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from "@material-tailwind/react";
import  {faHeart}  from '@fortawesome/free-solid-svg-icons';





function Homes() {
  const [activeSection, setActiveSection] = useState('section1');

  const showSection = (section) => {
    setActiveSection(section);
  };

  const renderSectionComponent = () => {
    switch (activeSection) {
      case 'section1':
        return <SearchAll />;
      case 'section2':
        return <Hotels />;
      case 'section3':
        return <ThingsTo />;
      case 'section4':
        return <Restaurant />;
      case 'section5':
        return <Vacaation />;
      default:
        return null;
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const numCards = 4;
  const cards = [
    { id: 1, src: c1, alt: 'Image 1',text:'Asia Beaches' },
    { id: 2, src: c2, alt: 'Image 2',text:'Caribbean Beaches'  },
    { id: 3, src: c3, alt: 'Image 3',text:'Europe Beaches'  },
    { id: 4, src: c4, alt: 'Image 4',text:'South  Beaches'  },
  ];  // You can replace these with your card components or data
  const secCard=[
    { id: 1, src: trip1, alt: 'Image 1', icon: <FontAwesomeIcon icon={faHeart} />,caption :'Dubai Red Dunes ATV, Sandsurf, Stargazing & 5* BBQ Al Khayma Camp',rating:<Rating value={3} className='w-5n'/> },
  { id: 2, src: trip2, alt: 'Image 2', icon: <FontAwesomeIcon icon={faHeart} /> ,caption :'Dubai Hot Air Balloon Ride with Breakfast, Falconry & Camel Ride ',rating:<Rating value={5} className='w-5 '/>},
  { id: 3, src: trip3, alt: 'Image 3', icon: <FontAwesomeIcon icon={faHeart} />,caption :'Vietnam Dalat Easyrider - Private Day Tours',rating:<Rating value={2} className='w-5 '/> },
  { id: 4, src: trip4, alt: 'Image 4', icon: <FontAwesomeIcon icon={faHeart} /> ,caption :'Jet Ski Tour of Dubai: Burj Al Arab, Dubai Marina, Atlantis, Palm', rating:<Rating value={4} className='w-5 '/>},
  ]


  return (
    <>
    <main className='mt-5 space-y-8'>
      <section>
        <div className='flex justify-center font-extrabold text-5xl'>
      {activeSection === 'section1' && <SearchAll/>}
      {activeSection === 'section2' && <Hotels/>}
      {activeSection === 'section3' && <ThingsTo/>}
      {activeSection === 'section4' && <Restaurant/>}
      {activeSection === 'section5' && <Vacaation/>}

    </div>
      </section>
      <div className="p-4 flex flex-col justify-center space-y-8">
      <nav className="flex justify-center">
          <ul className="flex space-x-10 justify-center text-xl">
            <li>
              <button className="text-slate-950 border-b-2 hover:text-zinc-500 border-transparent hover:border-b-2 hover:border-zinc-900" onClick={() => showSection('section1')}>Search All</button>
            </li>
            <li>
              <button className="text-slate-950 border-b-2 hover:text-zinc-500 border-transparent hover:border-b-2 hover:border-zinc-900" onClick={() => showSection('section2')}>Hotels</button>
            </li>
            <li>
              <button className="text-slate-950 border-b-2 hover:text-zinc-500 border-transparent hover:border-b-2 hover:border-zinc-900" onClick={() => showSection('section3')}>Things To Do</button>
            </li>
            <li>
              <button className="text-slate-950 border-b-2 hover:text-zinc-500 border-transparent hover:border-b-2 hover:border-zinc-900" onClick={() => showSection('section4')}>Restaurants</button>
            </li>
            <li>
              <button className="text-slate-950 border-b-2 hover:text-zinc-500 border-transparent hover:border-b-2 hover:border-zinc-900" onClick={() => showSection('section5')}>Vacation Rentals</button>
            </li>
          </ul>
        </nav>
        <div className='flex justify-center mb-10'>
          <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center border-2 rounded-3xl shadow-md'>
            <FaSearch size={30} className='m-auto ml-5' />
            <input type="text" placeholder='Destination' className='h-14 sm:w-[300px] lg:w-[600px] border-transparent' />
            <button className='bg-emerald-400 rounded-3xl px-6 m-auto py-3 font-bold'>Search</button>
          </div>
        </div>
        <div className='w-[700px] rounded-2xl bg-gradient-to-r from-color1 to-color2  md:w-[900px] lg:w-[1100px]  mx-auto '>
        <div className='flex flex-col md:flex-row  bg-cover bg-center h-[450px] ' style={{backgroundImage:`url(${mobile})` }}>
    <div className='flex flex-col'>
        <p className='md:ml-32 text-purple-950 text-xs mt-20 block '>Powered by AI <span className='bg-slate-50 text-black font-semibold py-1 px-2 rounded '>BETA</span></p>
        <p className='md:ml-32 mx-auto text-5xl w-2/4 font-bold text-[#301d49] mt-5'>Build a trip in minutes</p>
        <p className='md:ml-32 mx-auto  mt-5 text-[#301d49]  text-2xl   md:w-3/5  lg:w-3/6  '>Get a personalized itinerary just for  you, guided by traveler tips and reviews.</p>
     <button className=' mt-5 flex md:ml-32 p bg-[#302d49] px-4 w-44 py-3 rounded-3xl text-slate-50 font-bold'>start a trip with AI</button>
        </div>
          </div>
        </div>
   </div>
<div className='flex flex-col'>
  <div className='ml-12 space-y-2'>
     <h2 className='font-semibold text-2xl'>2024’s award-winning shores</h2>
         <p className='text-slate-500'>Travelers’ Choice Awards Best of the Best Beaches</p>
          </div>
    <div className="flex justify-center items-center mt-5">
    <div className="flex space-x-2">
  {cards.map((card, index) => (
    <div key={index} className={`w-72 h-64 rounded border border-gray-300 relative ${index === currentIndex ? 'bg-blue-200' : ''}`}>
      <img src={card.src} alt={card.alt} className="absolute inset-0 w-full h-full object-cover rounded" />
      <div className="absolute inset-0 bg-black opacity-50 rounded"></div> {/* Overlay for better text visibility */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-3xl font-bold">{card.text}</div>
    </div>
  ))}
</div>
    </div>
    </div>
   
    <div className='flex flex-col'>
  <div className='ml-12 space-y-2'>
     <h2 className='font-semibold text-2xl'>You might like these</h2>
     <p className='text-slate-500'>More things to do in Dubai</p>
    </div>

    <div className="flex justify-center items-center mt-5"> 
    <div className="flex space-x-2">
  {secCard.map((card, index) => (
    <div>
    <div key={index} className={`w-72 h-64 rounded border border-gray-300 relative ${index === currentIndex ? 'bg-blue-200' : ''}`}>
      <img src={card.src} alt={card.alt} className="absolute inset-0 w-full h-full object-cover rounded" />
      <div className="absolute top-0 right-0 p-4 text-white text-3xl font-bold ">{card.icon}</div>
    </div>
    <div className='flex flex-col'>
      <h1 className='w-3/4 font-bold text-md mt-2'>{card.caption}</h1>
      <div className='justify-center mt-6'>{card.rating}</div>

    </div>
    </div>
  ))}

</div>
    </div>
    </div>

    </main>
    <footer>footer</footer>
    </>
  );
} 

export default Homes;


