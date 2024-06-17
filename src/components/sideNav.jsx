import "../assets/CSS/components.css";
import logo from "../assets/Images/logo.png";
import iconOne from "../assets/Images/Sidenav-Icons/icon-1.png";
import iconTwo from "../assets/Images/Sidenav-Icons/icon-2.png";
import iconThree from "../assets/Images/Sidenav-Icons/icon-3.png";
import iconFour from "../assets/Images/Sidenav-Icons/icon-4.png";
import iconFive from "../assets/Images/Sidenav-Icons/icon-5.png";
import iconSix from "../assets/Images/Sidenav-Icons/icon-6.png";
import iconSeven from "../assets/Images/Sidenav-Icons/icon-7.png";
import iconEight from "../assets/Images/Sidenav-Icons/icon-8.png";
import iconNine from "../assets/Images/Sidenav-Icons/icon-9.png";
import iconTen from "../assets/Images/Sidenav-Icons/icon-10.png";

function SideNav() {
  return (
    <div className="sidenav text-center flexed-column">
      <div className="center mt-2 mb-4">
        <img src={logo} alt="logo" className="mt-2" />
      </div>
      <p className="mb-4">MENU</p>
      <div className="icons flexed-column text-center center">
        <img src={iconOne} alt="icon" className="mb-1" />
        <img src={iconTwo} alt="icon" className="mb-1" />
        <img src={iconThree} alt="icon" className="mb-1" />
        <img src={iconFour} alt="icon" className="mb-1" />
        <img src={iconFive} alt="icon" className="mb-1" />
        <img src={iconSix} alt="icon" className="mb-1" />
        <img src={iconSeven} alt="icon" className="mb-1" />
        <img src={iconEight} alt="icon" />
      </div>

      <div className="bottom-icons flexed-column center">
        <img src={iconNine} alt="icon" className="mb-1" />
        <img src={iconTen} alt="icon" className="mb-2" />
      </div>
    </div>
  );
}

export default SideNav;
