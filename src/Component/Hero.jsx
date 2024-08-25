import { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <div>
        <section class="hero">
          <div class="hero-text">
            <h1>Selamat Datang di Website Saya</h1>
            <p>Ini adalah contoh hero section menggunakan HTML dan CSS.</p>
            <button>Baca Selengkapnya</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
