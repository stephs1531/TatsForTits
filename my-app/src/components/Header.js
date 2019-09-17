import React from 'react';


class Header extends React.Component {

    render() {

        return (
            <div className="row jumbotron valign-wrapper">
                <ul className="main-nav">
                    <li><a href="#">home</a></li>
                    <li><a href="#">donate</a></li>
                    <li><a href="#">about p.ink</a></li>
                    
                </ul>
                <div className="header">
                    <img src="/images/TFT_Logo.png" class="logo-image"></img>
                    <p class="tagline">turning mastectomies into masterpieces</p>
                </div>
            </div>
        )
        }
}

export default Header