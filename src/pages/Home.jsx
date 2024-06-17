import "../assets/CSS/home.css";
import SideNav from "../components/sideNav";
import TopNav from "../components/topNav";

function Home() {
  return (
    <div className="home flexed-row">
      <SideNav />
      <main className="main-home flexed-column">
       <TopNav/>
      </main>
    </div>
  );
}

export default Home;
