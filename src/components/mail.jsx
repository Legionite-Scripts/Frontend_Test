import starIcon from "../assets/Images/mail-list-icons/gold-star.png";

const Mail=({text})=> {
  return (
    <main className="mail flexed-column p-1 mb-2">
      <div className="flexed-row mb-2">
        <h3>{text}</h3>

        <div className="date flexed-row center">
          <p>Now</p>&nbsp;
          <img src={starIcon} alt="Gold Star" />
        </div>
      </div>
        <p className="mb-1">Haven't gotten my refund</p>
        <p>Hello vendor, I have shipped the product but haven...</p>
    </main>
  );
}

export default Mail;
