import React from 'react';
import Image from '../images/article-image.png'


class WhyTats extends React.Component {

    render() {

        return (
            <div className="row why-tats valign-wrapper">
                <div className="article s12 m5">
                    <div className="headline">
                        <h1 className="tats-headline">why tattoos?</h1>
                    </div>
                    <div className="paragraph">
                        <p>We want to enable more women to get tattoos to cover their scars by creating a travelling tattoo parlor. The truck will travel across the United States for the entire 2018 year. Tattoo artists will travel with the truck to provide quality, professional tattoos to help breast cancer survivors heal and put cancer behind them.</p>
                    </div>
                </div>
                <div className="article-image s12 m5">
                    <img src={Image} className="article-image"/>
                </div>
            </div>
        )
        }
}

export default WhyTats