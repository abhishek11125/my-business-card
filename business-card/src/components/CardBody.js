import "./CardBody.css";
import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
const CardBody = () => {
  return (
    <div className="card-body">
      <img src="https://res.cloudinary.com/terieyenike/image/upload/c_thumb,g_face,w_317/v1637140050/calm_teri_b3eziq.jpg"></img>
      <Info></Info>
      <About></About>
      <Interest></Interest>
    </div>
  );
};

export default CardBody;
