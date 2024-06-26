import React from 'react'
import './Cards.scss'
//imported images
import CardImage2 from '../Assets/CardImage2.jpg'
import CardImage from '../Assets/CardImage.jpg'
import CardImage3 from '../Assets/CardImage3.jpg'
import CardImage4 from '../Assets/CardImage4.jpg'

//imported icon
import { AiOutlineSwapRight } from "react-icons/ai";

const Cards = () => {
  return (
    <div className='cards'>
      <div className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
             <img src={CardImage2}  />
          </div>
          <h4 className='textDiv'>Feel the sea Breeze to the optimum</h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
             <img src={CardImage}  />
          </div>
          <h4 className='textDiv'>Explore in to the wilderness encriched with beauty</h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
             <img src={CardImage3}  />
          </div>
          <h4 className='textDiv'>View and seek the gods creations</h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
             <img src={CardImage4}  />
          </div>
          <h4 className='textDiv'>Enjoy a very good morning in a tea plantaion. </h4>
        </div>
        <div className="spanText flex">
          Other Tours <AiOutlineSwapRight  className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Cards
