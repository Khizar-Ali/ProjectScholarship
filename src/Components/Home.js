import React from "react";
import UT from  "../Images/UT.jpg";
const Home = () => {
  return (
    <div style={{
          backgroundColor: "rgb(216, 239, 247)",
          paddingTop: 20,
          paddingBottom:20,
          paddingLeft:10,
        }}>

    <div>
    <div class="row">
    <div class="col-6">
    <h1>TALENT BASED SCHOLARSHIP</h1>
      <h5>Smart Think invites applications from talented candidates to offer its Talent Based Scholarship (TBS). We are on a talent hunt and looking for outstanding candidates who are in pursuit of excellence and also aims to reach high in their area of interest. The scholarships are awarded to candidates on a talent basis ranging from 15% to 35%  to be decided by ‘The Assessment Committee’.</h5> 
     <h3>Scholarships will be offered to the candidates who have any of the following skills or have a unique talent, who want to polish their skills while completing their education.</h3>
      </div>
      <div class="col-6">
      <h1> <img
              src={UT}
              style={{ height: 400, paddingBottom:20, paddingTop:10}}
              className="d-block w-20"
              alt="outside"
            /> </h1>
</div></div>    
<div class="row">
<div class="col-6">
      <h1> <img
              src={UT}
              style={{ height: 400, paddingBottom:20, paddingTop:10}}
              className="d-block w-20"
              alt="outside"
            /> </h1>
</div>
    <div class="col-6">
    <h1>MERIT BASED SCHOLARSHIP (MBS)</h1>
      <h5>A separate application is to be submitted for availing the scholarship. Only those applicants who have good academic record will be considered for scholarship. Smart Think is looking for a candidate who are applying for Merit-Based Scholarship (MBS) on the basis of;</h5> 
     <h3>Scholarships will be offered to the candidates who have any of the following skills or have a unique talent, who want to polish their skills while completing their education.</h3>
      </div>
      </div>    </div>
</div>
  );
};
export default Home;
