import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="img/WhatsApp Image 2022-08-29 at 23.49.06.jpeg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h1 className="a-sub">
          Nidhomul Muna Lana
        </h1>
        <p>Front End (skillvul)</p>

        <p className="a-desc">
        Hi, saya adalah web developer yang berdomisisli di Pekalongan.
                Saat ini sedang belajar HTML di skillvul.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Front End Development MSIB Batch 3</h4>
            <p className="a-award-desc">
             @nidhomulmunalana-front end 28
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
