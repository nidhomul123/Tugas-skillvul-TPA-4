import "./blog.css";
import Blog from "../blog/Blog";
import { Blog } from "../../data";

const Bloger = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
      <div className="kolom">
                    <div className="kolom-section">
                        <h3>Nidhomul.</h3>
                        <p>Mahasiswa STMIK Widya Pratama Pekalongan Semester 5</p>
                    </div>
                    <div className="kolom-section">
                        <h3>About</h3>
                        <p>Saya Adalah Seorang Mahasiswa Semester 5 di Kampus STMIK Widya Pratama Pekalongan
                            Saya berumur 20 tahun.Bulan april tanggal 30.Saya disamping kuliah saya mondok di pesantren terpadu alfusha kedungwuni, pekalongan
                            saya mengikuti program MSIB di kampus merdeka bersama Mitra PT IMPACTBYTE TEKNOLOGI EDUKASI, Atau yang dikenal Skillvul.
                            keinginan saya belajar di skillvul mencari ilmu dan memperdalam keahlian saya di bidang IT dalam coding tentunnya, agar besok kelak bisa menjadi 
                            mahasiswa lulus 3,5 tahun saja.  
                        </p>
                    </div>
                    <div className="kolom-section">
                        <h3>Contact</h3>
                        <p>Jl. Dr Wahiding gg15a Noyontaansari, kecamatan Pekalongan Timur, Kabupaten Pekalongan, Jawa Tengah.</p>
                        <p>Kode Pos: 57365</p>
                    </div>
                    <div className="kolom-section">
                        <h3>Social</h3>
                        <p><b>YouTube: </b>Nidhomul muna lana</p>
                        <p><b>Facebook: </b>Muhammad Dhoom</p>
                        <p><b>Whatshapp: </b>085601121174</p>
                        <p><b>Telegram: </b>@ARTNFT15</p>
                        <p><b>Tik tok: </b>@0053ndhy</p>
                        <p><b>Twitter: </b>@NFTsukses</p>
                        <p><b>Discord: </b>nidhomul #8956</p>
                    </div>
                </div>
      </div>
      <div className="pl-list">
        {Blog.map((item) => (
          <Blog key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Bloger;
