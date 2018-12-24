import React, { Component } from "react";
import Parallax from "./common/parallax";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
  }
  render() {
    return (
      <React.Fragment>
        <div className="myContainer">
          <Parallax
            factor={0.7}
            faster={false}
            backgroundImage={require("../img/cover.jpg")}
          >
            <h1 className="h1 overlay">
              The revolutionary<br />design agency
            </h1>
            <h3 className="h3 overlay">#redbonobo</h3>
          </Parallax>
          <div className="strip">
            <h2 className="h2 centered">More than just a studio </h2>
            <p className="p centered">
              Red Bonobo is a innovational and revolucionary design agency
              stablished in Barcelona. Our purpous is to help redesign this
              world into a better one, more respectful, conscious and aesthetic.
              We truly believe that society deserves better designs, with more
              purpous than just satisfying business affairs. We are a little,
              yet powerful agency that provides fresh creativity and
              professional and profitable solutions.
            </p>
            <div className="row">
              <div className="col-md-4">
                <h3 className="h3">innovation</h3>
                <p className="p">
                  Market is alive. It has needs, desires, it’s mood changes. We
                  analyze this complex interconnected living system, and give it
                  what it needs. No more, and of course, not less.
                </p>
              </div>
              <div className="col-md-4">
                <h3 className="h3">design</h3>
                <p className="p">
                  Any product is alive, and it needs to be taken care of, from
                  its birth to its death. We are multidisciplinary creators,
                  able to make coherent, seamless and powerful value proposals.
                </p>
              </div>
              <div className="col-md-4">
                <h3 className="h3">engineering</h3>
                <p className="p">
                  A real product needs to meet real world requirements. We make
                  sure that the design is able to live in its environment.
                  Sustainability and project’s lifecycle is a must for us.
                </p>
              </div>
            </div>
          </div>
          <Parallax
            factor={0.7}
            faster={false}
            backgroundImage={require("../img/city-3.jpg")}
          >
            <h1 className="h1 overlay">
              From Reality
              <br />
              to Ideas
            </h1>
            <h3 className="h3 overlay">#innovation</h3>
          </Parallax>
          <div className="strip">
            <h2 className="h2 centered">
              Understanding the world that surrounds us
            </h2>
            <div className="row">
              <div className="col-md-4">
                <h3 className="h3">market</h3>
                <p className="p">
                  It is necessary to make an in-depth market analisys in search
                  of innovative business models, new market segments, as well as
                  the best practices of the competition, that indicates us where
                  they differ and where our opportunities lie.
                </p>
              </div>
              <div className="col-md-4">
                <h3 className="h3">user</h3>
                <p className="p">
                  We extensively practice Design Thinking methodology, thanks to
                  which we are able to empathize and understand the user’s way
                  of living, therefore create a product that satisfy their needs
                  in the best way possible. 50% of innovation comes from
                  customer voices. They are part of our team.
                </p>
              </div>
              <div className="col-md-4">
                <h3 className="h3">technology</h3>
                <p className="p">
                  Every day, there is a new technology, a new material… that can
                  help us create a completely innovative product that actually
                  outstands the rest. We are in continuous research of new ways
                  to create more sustainable products that can not only generate
                  minimum negative impact in the environment, but generate a
                  positive one.
                </p>
              </div>
            </div>
          </div>
          <Parallax
            factor={0.7}
            faster={false}
            backgroundImage={require("../img/design-banner.jpeg")}
          >
            <h1 className="h1 overlay">
              From Ideas
              <br />
              to a Solution
            </h1>
            <h3 className="h3 overlay">#design</h3>
          </Parallax>
          <div className="strip">
            <h2 className="h2 centered">Idea + Details = Design</h2>
            <div className="row">
              <div className="col-md-4">
                <h3 className="h3">branding</h3>
                <p className="p">
                  Brand is a promise to clients… a promise of quality,
                  consistency, competency, and reliability. A good branding is a
                  good communication.
                </p>
              </div>
              <div className="col-md-4">
                <h3 className="h3">product</h3>
                <p className="p">
                  Shapes are no more than light bouncing in a certain way. We
                  believe that shapes drive emotion, and we love paying
                  attention to details.
                </p>
              </div>
              <div className="col-md-4">
                <h3 className="h3">interaction</h3>
                <p className="p">
                  People ignore design that ignores people. That’s why it’s
                  vital to build a seamless experience. We also take care of
                  that.
                </p>
              </div>
            </div>
          </div>
          <Parallax
            factor={0.7}
            faster={false}
            backgroundImage={require("../img/engineering-banner.jpeg")}
          >
            <h1 className="h1 overlay">
              From a Solution
              <br />
              to a Reality
            </h1>
            <h3 className="h3 overlay">#engineering</h3>
          </Parallax>
          <div className="strip">
            <h2 className="h2 centered">Giving life to projects</h2>
            <div className="row">
              <div className="col-md-4">
                <h3 className="h3">development</h3>
                <p className="p">
                  Profitable and sustainable creativity does not exist without
                  well-focussed industrial optimisation in advance. We take full
                  control of the development phase, from mechanical and
                  electronic engineering to supplier management.
                </p>
              </div>
              <div className="col-md-4">
                <h3 className="h3">prototyping</h3>
                <p className="p">
                  A key tool for validating design phases and avoiding cost
                  overruns during the production phase. Prototyping in advance
                  is crucial for facilitating strategic decision-making
                  processes while seeking out the lowest possible economic
                  impact.
                </p>
              </div>
              <div className="col-md-4">
                <h3 className="h3">management</h3>
                <p className="p">
                  We continuously work in close contact with the manufacturing
                  industry and suppliers. We take care of industrial management
                  matters, so the design is always manufactured as expected.
                </p>
              </div>
            </div>
          </div>
          <Parallax
            factor={0.7}
            faster={false}
            backgroundImage={require("../img/cover.jpg")}
          >
            <div className="row">
              <div className="col-md-6">
                <Link to="/projects" className="button overlay">
                  see projects
                </Link>
              </div>
              <div className="col-md-6">
                <Link to="/contact" className="button overlay">
                  contact us
                </Link>
              </div>
            </div>
          </Parallax>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
