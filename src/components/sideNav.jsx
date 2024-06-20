import logo from "../assets/Images/logo.png";
import iconOne from "../assets/Images/nav-icons/icon-1.png";
import iconTwo from "../assets/Images/nav-icons/icon-2.png";
import iconThree from "../assets/Images/nav-icons/icon-3.png";
import iconFour from "../assets/Images/nav-icons/icon-4.png";
import iconFive from "../assets/Images/nav-icons/icon-5.png";
import iconSix from "../assets/Images/nav-icons/icon-6.png";
import iconSeven from "../assets/Images/nav-icons/icon-7.png";
import iconEight from "../assets/Images/nav-icons/icon-8.png";
import iconNine from "../assets/Images/nav-icons/icon-9.png";
import iconTen from "../assets/Images/nav-icons/icon-10.png";

function SideNav() {
  return (
    <div className="sidenav text-center flexed-column p-2">
      <div className="center mb-4">
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
        <img src={iconTen} alt="icon" className="" />
      </div>
    </div>
  );
}

export default SideNav;
