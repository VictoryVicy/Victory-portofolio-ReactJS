import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container m-auto flex justify-between px-4 py-6">
        <div>
          <p className="text-gray-300 text-sm">Copyright &copy; 2023</p>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <a href="https://www.facebook.com/VictoryKuriakos">
                <img src={Facebook} className="w-6" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/victory-kuriakos-a-47280828a">
                <img src={Linkedin} className="w-6" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/for_vicy">
                <img src={Instagram} className="w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
