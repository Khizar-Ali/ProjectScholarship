import image from "../Images/image.jpg";
const AboutUs = () => {
  return (
      <div>
<div>
<img
              src={image}
              style={{ height: 200}}
              className="d-block w-20"
              alt="outside"
            />
</div>
    <div class="row" id="nav">
      <h1>We are a US Based Non-Profit Organization offering Scholarships and Educational Aid to students around the world by assessing their potential and directing them to the relevant institutes who offer and onboard students in all programs</h1>
    </div>
    </div>
  );
};
export default AboutUs;

