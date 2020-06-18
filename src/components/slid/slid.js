import React from 'react';
import './slid.sass';

const Img = (props) => {
    const bacImg = {
        backgroundImage: `url(images/${props.name}`
    }
    return (
      
        <div className="slid__img-part" style={bacImg }> </div>
    )
}

const Slid = (props) => {
    const { items, title, subtext, background, img } = props.content;

    const backgroundClass = `background-view_${background}`;
    // const image = require(path);

    const itemsArr = items.map((item, index) => {
        const frontClass = (item.font) ? `slid__list-item_bold` : '';
        return (
            <li className={`slid__list-item ${frontClass}`} key={index}> {` ${item.text}`} <sup><small>{item.sup}</small></sup> </li>
        )
    });
    return (
        <div className={`slid ${backgroundClass}`} >
            <div className="container">
                <div className="slid__content">
                    <div className="slid__text-part">
                        <div className="slid__title">{title}</div>
                        <div className="slid__subtext">{subtext}</div>
                        <ul className="slid__list">
                            {itemsArr}
                        </ul>
                        <button className="slid__button"> Консультация</button>
                    </div>
                    <Img name={img}/>

                </div>
            </div>
        </div>
    )
}

export default Slid;