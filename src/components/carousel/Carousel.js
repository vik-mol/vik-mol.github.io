import React, { Component } from 'react';
import Slid from '../slid/slid';
import data from '../../data/data';
import Slider from "react-slick";
import './Carousel.sass';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Carousel extends Component {
    state = {
        slidData: data.properties,
        slidWidth: window.innerWidth,
        isMobail: false,
        currentIndex: 0
    }

    getCurrentIndex = (currentIndex = 0) => {
        console.log(currentIndex);
        this.setState({
            currentIndex
        });
    }



    checkScreenWidth = () => {
        
        const getWidth = () => {
            const w = window.innerWidth;
            const mobail = this.state.isMobail
            if (w < 769 && !mobail) {
                this.setState({
                    isMobail: !mobail
                })
            }
            if (w >= 769 && mobail) {
                this.setState({
                    isMobail: !mobail
                })
            }

        }
        window.addEventListener('resize', getWidth);
        getWidth();
    }


    componentDidMount() {
        this.checkScreenWidth();
        this.getCurrentIndex();
    }


    render() {


        const sliderBut = [];
        const { slidData, currentIndex, isMobail } = this.state;
        const slids = slidData.map((slid, index) => {
            sliderBut.push([{ text: slid.pagin, background: slid.background }]);
            return (
                <Slid key={index} content={slid} />
            )
        });

        const settings = {
            dots: true,
            infinite: true,
            arrow: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            dotsClass: 'slider__padination-wpapper',
            afterChange: this.getCurrentIndex,
            appendDots: dots => (
                <div>
                    <div className="container">
                        <ul className='slider__padination'> {dots}</ul>
                    </div>
                </div>
            ),
            customPaging: (i) => {
                let backgroundClass = (i === currentIndex) ? sliderBut[i][0].background : 'default';
                const paginTitle = (isMobail) ? '' : sliderBut[i][0].text;

                return (
                    <div className={`slider__btn background-view_${backgroundClass}`} >
                        <span>{paginTitle}</span>
                    </div>
                )
            }
        };

        return (
            <div className="slider" >
                <Slider {...settings}>
                    {slids}
                </Slider>

            </div>

        )
    }
}

