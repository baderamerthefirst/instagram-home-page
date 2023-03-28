import React from 'react'
import SuggestionProfile from './SuggestionProfile'
import  "./Suggestions.css";

const Suggestions = () => {
  return (
    <div className='Suggestions'>
        <div className='SuggestionsT'>
        <span className='ForYou'>Suggestions for you</span>
        <span className='SeeAll'>See All</span>
        </div>
        <div></div>
        <SuggestionProfile icon={"https://loremflickr.com/320/240?104"} name="sss333" subtext="jimi" />
        <SuggestionProfile icon={"https://loremflickr.com/320/240?103"} name="gas222" subtext="rame" />
        <SuggestionProfile icon={"https://loremflickr.com/320/240?102"} name="hokg6" subtext="bass" />
        <SuggestionProfile icon={"https://loremflickr.com/320/240?101"} name="mas" subtext="sals" />


    </div>
  )
}

export default Suggestions