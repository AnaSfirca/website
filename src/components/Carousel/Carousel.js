import React, {useState} from 'react'
import butondreapta from './media/buton-articole-dreapta.png'
import butonstanga from './media/buton-articole-stanga.png'
import CarouselSlide from '../CarouselSlide/CarouselSlide'

const Carousel = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  const visibleItems = items
    .slice(currentIndex, currentIndex + 3)
    .concat(items.slice(0, currentIndex + 3 - items.length));

  return (
    <div className="flex flex-row justify-center items-center m-2 list-none">
        <div className="hidden md:flex">
        <img src={butonstanga} className="cursor-pointer object-none" alt="stanga" onClick={() => { handlePreviousClick()}}/>
        {visibleItems.map((item, index) => {
            return  (
                  <div className="" key={index}> 
                      <div className={`flex flex-col md:flex-row justify-center items-center`}> 
                        <div className="flex flex-row space-x-4">
                          <CarouselSlide image={item.image} alt={item.alt} text={item.text} title={item.title}/>
                        </div>
                      </div>
                  </div>               
            )
        })}
        <img src={butondreapta} className="cursor-pointer object-none" alt="dreapta" onClick={handleNextClick}/>
        </div>
    </div>
  )
}

export default Carousel;