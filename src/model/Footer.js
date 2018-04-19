import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <section id="team" className="section team-section pt-3 play">
        <h1 className="section-heading mt-5 pt-4 font-weight-bold wow fadeIn">Our Team</h1>
        <div className="row text-center wow fadeIn" data-wow-delay="0.4s">
          <div className="col mb-5">
            <div className="avatar mx-auto">
              <img src="https://cdn.stelo.info/vocs/allie.jpg" alt="Allie" className="z-depth-1 img-fluid circle" />
            </div>
            <h4>Allie</h4>
            <h5>Product Manager</h5>
          </div>
          <div className="col mb-5">
            <div className="avatar mx-auto">
              <img src="https://cdn.stelo.info/img/stelo.svg" alt="Prakash" className="z-depth-1 img-fluid circle" />
            </div>
            <h4>Prakash</h4>
            <h5>Solution Architect</h5>
            <a type="button" href="https://linkedin.com/in/stelo" className="btn-floating btn-li btn-primary" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            <a type="button" href="https://github.com/st-e-lo" className="btn-floating btn-git btn-primary" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          </div>
          <div className="col mb-5">
            <div className="avatar mx-auto">
              <img src="https://cdn.stelo.info/vocs/leo.jpg" alt="Leo" className="z-depth-1 img-fluid circle" />
            </div>
            <h4>Leo</h4>
            <h5>Testing Coordinator</h5>
          </div>
          <div className="col mb-5">
            <div className="avatar mx-auto">
              <img src="https://cdn.stelo.info/vocs/khanh.jpg" alt="Khanh" className="z-depth-1 img-fluid circle" />
            </div>
            <h4>Khanh</h4>
            <h5>Developer</h5>
              <a type="button" href="https://www.linkedin.com/in/khanh-tran-139b54152/" className="btn-floating btn-li btn-primary" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
              <a type="button" href="https://github.com/kevkhanh" className="btn-floating btn-git btn-primary" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          </div>
          <div className="col mb-5">
            <div className="avatar mx-auto">
              <img src="https://cdn.stelo.info/vocs/moks.jpg" alt="Mokshat" className="z-depth-1 img-fluid circle" />
            </div>
            <h4>Mokshat</h4>
            <h5>Developer</h5>
            <a type="button" href="https://www.linkedin.com/in/mokshat-sood-582227160/" className="btn-floating btn-li btn-primary" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            <a type="button" href="www.github.com/mokshat" className="btn-floating btn-git btn-primary" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
