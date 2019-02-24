import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Digital Business Development</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Tired of agencies talking about awareness efforts as if it is an objective in itself? Businesses are looking for a direct impact on their bottom line, and that is why we are not an agency!</p>

          <p>We “Gurus” work with your leadership team in order to establish your business objectives, and how we can grow your revenue and ROI, We will form a deep understanding of your unique selling points, your sales and value proposition, and we will implement a direct BDM approach, all while working on your Digital Brand Transformation, your Digital Branding, and overall Digital presence.</p>

          <p>This is a comprehensive product, where we will establish or optimize your Digital Brand, create Branded content, while we send an army of virtual business developers to build bridges, mass-networking, and generate quality leads through Linkedin and Google platforms, saving thousands to millions of annual resources and costs, so your leadership can directly connect with potential clients, and convert deals!</p>
          <p>
          This product is inclusive of:
          <ul>
          <li>Linkedin Business Development</li>
          <li>Content Creation</li>
          <li>Digital Branding and Brand Transformation</li>
          <li>Digital Marketing on all platforms</li>
          <li>Social Media Management on all platforms</li>
          <li>Instagram Organic Growth Exclusively by Gurus</li>
          </ul>
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Our Success stories with Businesses in a diversity of industries will be published soon, please check back later. </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>We are a team of experts, harnessing over a decade of experience, to serve our clients with the best and latest solutions. Through years of practice and numerous collaborations, with a wide range of skills, such as Business Advisory, Comprehensive Digital Marketing, Branding, Business Development, Content Creation, Video Design and Editing, illustration, Content writing, Graphic Design, Community, Growth Hacking, Social media management, printing and production services, and many more.</p>
          <p>We promise results, and we deliver what we promise, We work directly with your leadership team to establish objectives, and deliver guaranteed results!</p>
          <p>Our clientele have one thing in common, they grew tired of countless agencies over promising and under delivering, The Gurus have demonstrated Quality, Commitment, and Results, we have increased brand awareness, grew loyal followers, and above all generated ROI for all our clients.</p>
          <h2 className="major">About Mardini:</h2>
          <p>Experienced Digital Branding, Marketing, Web, and Tech Guru with a demonstrated history of working in the marketing and advertising industry. Skilled in Search Engine Optimization (SEO), Marketing Management, e-Commerce, and All Social Media Platforms, with a Bachelor degree in IT.

          A Business and Marketing professional with a Cambridge UK Diploma in Business and Marketing.
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>          hello@gurus.ae<br/>
          +971552825417<br/>
          +97144566685<br/>
          The Springs, Dubai, United Arab Emirates</p>


          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/company/gurus-ae/" className="icon fa-linkedin" target="_blank"><span className="label">Linkedin</span></a></li>
            <li><a href="https://www.facebook.com/ae.gurus" className="icon fa-facebook" target="_blank"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/gurus.ae/" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
            <li><a href="https://www.twitter.com/Gurus_ae" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
            // <li><a href="https://github.com/gurus-digital" className="icon fa-github" target="_blank"><span className="label">GitHub</span></a></li>

          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
