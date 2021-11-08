import Trollface from "../Trollface.png";
const Header = () => {
  return (
    <header>
      <img src={Trollface} alt="troll face" style={{ width: "50px" }} />
      <p>Meme Generator</p>
    </header>
  );
};
export default Header;
