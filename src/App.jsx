import React from "react";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a href="#" className="text-white">
              <span className="mr-2 text-white icon-envelope-open-o"></span>
              <span className="d-none d-md-inline-block">andrey.chizhov.dev@gmail.com</span>
            </a>
            <span className="mx-md-2 d-inline-block"></span>
            <a href="#" className="text-white">
              <span className="mr-2 text-white icon-phone"></span>
              <span className="d-none d-md-inline-block">+7 (960)-859-53-04</span>
            </a>

            <div className="float-right">
              <a href="#" className="text-white">
                <span className="mr-2 text-white icon-twitter"></span>
                <span className="d-none d-md-inline-block">Twitter</span>
              </a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="#" className="text-white">
                <span className="mr-2 text-white icon-instagram"></span>
                <span className="d-none d-md-inline-block">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="site-logo">
            <a href="#" className="text-black">
              <span className="text-primary">Andrey Chizhov</span>
            </a>
          </div>
          <div className="col-12">
            <nav className="site-navigation text-right ml-auto" role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                <li><a href="#home-section" className="nav-link">Home</a></li>
                <li><a href="#services-section" className="nav-link">Services</a></li>
                <li><a href="#about-section" className="nav-link">About Us</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="container mt-5">
        <h1>Hello, Andrey Chziov Template!</h1>
      </main>
    </>
  );
}
