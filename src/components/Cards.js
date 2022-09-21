import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Our Wonderful Team</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem
                    src='images/TeacherMarial.jpeg'
                    text='Teacher Marial'
                    label='Piano'
                    path='/marial' 
                    />
                    <CardItem
                    src='images/TeacherDixie.jpeg'
                    text='Teacher Dixie'
                    label='Voice'
                    path='/services' 
                    />
                    <CardItem
                    src='images/TeacherRuzzel.jpeg'
                    text='Teacher Ruzzel'
                    label='Guitar'
                    path='/services' 
                    />
                    <CardItem
                    src='images/TeacherZiv.jpeg'
                    text='Teacher Ziv'
                    label='Ukelele'
                    path='/services' 
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;