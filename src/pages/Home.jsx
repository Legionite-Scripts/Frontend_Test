import "../assets/CSS/home.css";
import ComposeBox from "../components/composeBox";
import SideNav from "../components/sideNav";
import TopNav from "../components/topNav";
import MailList from "../components/mailList";

function Home() {
  return (
    <div className="home flexed-row">
      <SideNav />
      <main className="main-home flexed-column">
       <TopNav/>

       <section className="home-inner flexed-row">
        <ComposeBox/>
        <MailList/>
       </section> 
      </main>
    </div>
  );
}

export default Home;
