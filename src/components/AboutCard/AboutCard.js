import React from 'react'
import {
  Link
} from 'react-router-dom'
const image = require('./head_shot.jpg')


const AboutCard = () => {
  return (
    <>
    <div class="card m-3" >
      <h2 class="card-title">About Me</h2>
      <hr />
      <div class="row single-post mt-5 no-gutters">
        <div class="card-body">
          <div class="col-md-12">
            <img src={image} class="card-img float-left pr-4 col-md-6" alt="rubber ducky"/>
              <p class="single-post-content-wrapper p-8">
                Gwendolyn Duck has been working with developers since January 13, 2020. She is an accomplished code de-bugger, conversant in html, css, and javascript issues. Gwendolyn is well known as a collaborative team player. She has worked with such noteable colleagues as Harold the baloon dog and developer Octocat. (See <Link to="./portfoliopage">Portfolio</Link> for more on this collaborative work).
            <br />
                  In addition to her coding achievements, Gwendolyn is a world class competative bathtub swimmer, having set records for fastest time from one end of the bath to the other in bubbly conditions in the lightweight rubber duck division.
          </p>
          </div>
        </div>
          </div>
        </div> 
    </>
  )
}

export default AboutCard


