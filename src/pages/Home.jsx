import ComposeBox from "../components/composeBox";
import SideNav from "../components/sideNav";
import TopNav from "../components/topNav";
import MailList from "../components/mailList";
import noMessagesIcon from "../assets/Images/no-messages.png";

function Home() {
  return (
    <div className="home flexed-row">
      <SideNav />
      <main className="main-home flexed-column">
       <TopNav/>

       <section className="home-inner flexed-row">
        <ComposeBox/>
        <MailList/>

        <section className="home-messages center p-2">
         <div className="center flexed-column">
          <img src={noMessagesIcon} alt="No messages" className="mb-3"/>
          <h3 className="mb-1">No Message Selected</h3>
          <p className="text-center">Select a message to open conversation and get started</p>
         </div>
        </section>
       </section> 
      </main>
    </div>
  );
}

export default Home;
