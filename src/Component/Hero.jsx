import { Component } from "react";
import "./Hero.css";
import aqil from "../assets/aqil.png";

class Hero extends Component {
  render() {
    return (
      <div>
        <section class="hero">
          <div class="hero-text">
            <h1>Fintech Syariah </h1>
            <p>ayo join bisnis kamu</p>
            <button>Baca Selengkapnya</button>
          </div>
          <img src={aqil} alt="aqil" />
        </section>
      </div>
    );
  }
}

export default Hero;
