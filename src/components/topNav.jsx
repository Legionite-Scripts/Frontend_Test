import notificationIcon from "../assets/Images/nav-icons/notification.png";

function TopNav() {
  return (
    <main className="topNav p-2 flexed-row center">
      <h2>Shared Inbox</h2>
      <div className="flexed-row center">
        <a href="#">
          <img src={notificationIcon} alt="Notifications" />
        </a>

        <div>
          <p>Abubakar Ismail</p>
          <p>Administrator</p>
        </div>
      </div>
    </main>
  );
}
export default TopNav;
