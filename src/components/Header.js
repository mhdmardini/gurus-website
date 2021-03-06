import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <img src={logo} alt="Logo" id="logo" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Access the Gurus</h1>
                <p>Fed up with agencies that over-promise and under-deliver? Great news, We are not an agency! We work directly with your leadership team to establish objectives, and we guarantee results!</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>product</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
