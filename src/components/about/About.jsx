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
        <p className="a-sub">
        Nidhomul Muna Lana
        Front End-Skillvul
        Bootcamp Development
        </p>
        <p className="a-desc">
                            Saya Adalah Seorang Mahasiswa Semester 5 di Kampus STMIK Widya Pratama Pekalongan
                            Saya berumur 20 tahun.Bulan april tanggal 30.Saya disamping kuliah saya mondok di pesantren terpadu alfusha kedungwuni, pekalongan
                            saya mengikuti program MSIB di kampus merdeka bersama Mitra PT IMPACTBYTE TEKNOLOGI EDUKASI, Atau yang dikenal Skillvul.
                            keinginan saya belajar di skillvul mencari ilmu dan memperdalam keahlian saya di bidang IT dalam coding tentunnya, agar besok kelak bisa menjadi 
                            mahasiswa lulus 3,5 tahun saja
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Front end Development</h4>
            <p className="a-award-desc">
              Skillvul.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
