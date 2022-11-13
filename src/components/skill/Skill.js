import "./skill.css";
import Skill from "../skill/Skill";
import { Skill } from "../../data";

const Skilles = () => {
  return (
    <div className="pl">
      <div className="pl-tabel">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Pengalaman</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>HTML (Expert)</li>
                                <li>CSS (Beginner)</li>
                                <li>Javascript (Beginner)</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>coding kelas</li>
                                <li>Coding Kampus</li>
                                <li>Ngga juara coding</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
      </div>
      <div className="pl-list">
        {skill.map((item) => (
          <Skill key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Skilles;
