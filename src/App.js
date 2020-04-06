import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />

      <hr/> 

      <div style={{padding: "0 5% 0 5%"}}>
        <h2>About Us</h2>
        <p>
        The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life for individuals around Maryland. From literacy and equity in 
        education, to at-risk youth programs and mental health access, the foundation believes and sees value in individuals, and their impact on the 
        world, when they are given access to opportunity. 
        </p>

        <p>
          The David and Mikel Blair Family Foundation was founded in 2008 and is funded by the generosity of David and Mikel Blair. 
          The family foundation is based in Montgomery County, MD and their philanthropic efforts touch communities on a national scale.
        </p>

        <p>
          David and Mikel Blair continue their commitment to a number of civic and charitable organizations by investing both time 
          and resources to economic development, educational opportunities, arts programs and health-based initiatives. 
        </p>

        <h2>Mission</h2>
        <p>
          The David and Mikel Blair Family Foundation is dedicated to purposeful giving and is rooted in improving the quality of life 
          for individuals around Maryland. From literacy and equity in education, to at-risk youth programs and mental health access, the 
          foundation believes and sees value in individuals, and their impact on the world, when they are given access to opportunity. 
        </p>

        <h2>Vision</h2>
        <p>
          To create a Maryland where all individuals-- regardless of circumstance or zip code-- are given equal access to opportunity 
          to realize their purpose and potential. 
        </p>

        <h2>Media</h2>
        <p>Coming soon!</p>

        <h2>Partners</h2>
        <p>Coming soon!</p>

        <h2>Contact Us</h2>
        <p>
          Please email <a href="info@theblairfamilyfoundation.org">info@theblairfamilyfoundation.org</a>.
        </p>

        <div style={{textAlign: "center"}}>
          <img
            style={{maxWidth: "50%", height: "auto"}}
            alt="family"
            src={require("./assets/images/family.jpg")} />
        </div>
      </div>

      <br/>
      <hr/>
      <br/>

      <Footer />
    </div>
  );
}

export default App;
