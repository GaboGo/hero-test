import React from 'react';
import FiltersContainer from '../Filters/FiltersContainer';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
    return (
        <div tabIndex="-1" className="cards-container--card">
            <div className="cards-container--card-inner">
                <div className="cards-container--card-front">
                    <div className="cards-container--card-ribbon-wrapper">
                        <div className="cards-container--card-ribbon">FEATURED</div>
                    </div>
                    <img
                        className="cards-container--card-front-img"
                        alt={data?.title}
                        src={data?.image}
                        height="200"
                    ></img>
                    <div className="cards-container--card-front-content">
                        <h2>{data?.title}</h2>
                        <p className="cards-container--card-front-description">
                            {data?.description}
                        </p>
                    </div>
                </div>
                <div className="cards-container--card-back">
                    <img
                        className="cards-container--card-back-img"
                        alt={data?.title}
                        src={data?.image}
                        height="200"
                    ></img>
                    <div className="cards-container--card-back-content">
                        <h2>{data?.id}</h2>
                        <FiltersContainer cardTags={data.tags} isCard></FiltersContainer>
                        <span tabIndex="-1" className="cards-container--card-back-cta">
                            LEARN MORE <bold>{'>'}</bold>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Card;
