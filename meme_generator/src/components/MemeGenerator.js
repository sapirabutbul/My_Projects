import React from "react";
import { connect } from "react-redux";
import { fetchMemes, createTopText, createBottomText } from "../redux/actions";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      randomImg: "https://i.imgflip.com/4t0m5.jpg",
    };
  }
  componentDidMount() {
    this.props.fetchMemes();
  }
  randomImage = (e) => {
    e.preventDefault();
    const { allMemeImgs } = this.props;
    let randomNumber = Math.floor(Math.random() * (allMemeImgs.length - 1));
    this.setState({ randomImg: allMemeImgs[randomNumber].url });
    console.log(this.state.randomImg);
  };
  render() {
    console.log(this.props.allMemeImgs);
    const { createTopText, createBottomText, topText, bottomText } = this.props;
    return (
      <div className="meme">
        <form className="meme-form">
          <button type="click" onClick={this.randomImage}>
            GEN
          </button>
          <input
            id="topText"
            placeholder="Top Text"
            type="text"
            onChange={createTopText}
          />
          <input
            id="bottomText"
            placeholder="Bottom Text"
            type="text"
            onChange={createBottomText}
          />
        </form>
        <div className="container">
          <h2 className="top">{topText}</h2>
          <img src={this.state.randomImg} alt="meme" className="memeImg" />
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allMemeImgs: state.fetchReducer.allMemeImgs,
    topText: state.memeReducer.topText,
    bottomText: state.memeReducer.bottomText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMemes: () => dispatch(fetchMemes()),
    createTopText: (e) => dispatch(createTopText(e.target.value)),
    createBottomText: (e) => dispatch(createBottomText(e.target.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MemeGenerator);
