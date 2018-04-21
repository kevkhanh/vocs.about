import React from 'react';

const styles = {
    block: {
        height: '30px'
    }
};

const Main = () => (
  <main>
      <div className="container">
      <section className="play">
          <h1 className="section-heading mt-5 pt-4 font-weight-bold wow fadeIn">About Vocs</h1>
          <div className="row wow fadeIn">
              <div className="col-lg-6 col-md-12 px-4">
                  <div className="row">
                      <div className="col-1 mr-3">
                          <i className="fa fa-code fa-2x indigo-text"></i>
                      </div>
                      <div className="col-10">
                          <h5 className="feature-title">Vocs</h5>
                          <p className="grey-text">Thanks to VOCS, you are now introduced to a new world of easier communication.</p>
                      </div>
                  </div>
                  <div style={styles.block}></div>
                  <div className="row">
                      <div className="col-1 mr-3">
                          <i className="fa fa-book fa-2x blue-text"></i>
                      </div>
                      <div className="col-10">
                          <h5 className="feature-title">How To Use VOCS</h5>
                          <p className="grey-text">Simply press start and start recording. Your speech will be automatically transcribed into text and analyzed using Natural Languange Processing.
                          </p>
                      </div>
                  </div>
                  <div style={styles.block}></div>
                  <div className="row">
                      <div className="col-1 mr-3">
                          <i className="fa fa-graduation-cap fa-2x cyan-text"></i>
                      </div>
                      <div className="col-10">
                          <h5 className="feature-title">Special Features</h5>
                          <p className="grey-text">We inspect your speech for sentiments and entities. We provide a pie chart with emotions and entities together with their confidence levels. Entities is a new concept for reference to the unique name
of a real-world object such as people, places, and commercial items, and to
precise references to measures such as dates and quantities</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-12">
                  <p className="h5 text-center mb-4">MKBHD</p>
                  <div className="embed-responsive embed-responsive-16by9">
                      <iframe src="CI.png" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video"></iframe>
                  </div>
              </div>
          </div>
      </section>
      </div>
  </main>
);

export default Main;
