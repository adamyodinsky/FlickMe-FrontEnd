import React from 'react';
import './movie.css';
import Share from '../../../assets/share.svg';
import Like from '../../../assets/like.svg';
import Flick from '../../../assets/icon.svg';

const BtnBox = ()=> {
  return (
      <div className="btns-box">
        <div className="btn">
          <a href="#1">
            <img
                src={Share}
                className="btn__svg btn__share btn__shadow"
                alt="share"
            />
          </a>
        </div>
        <div className="btn">
          <a href="#2">
            <img
                src={Flick}
                className="btn__svg btn__flick btn__shadow"
                alt="flick-me"
            />
          </a>
        </div>
        <div className="btn">
          <a href="#3">
            <img
                src={Like}
                className="btn__svg btn__like btn__shadow"
                alt="like"
            />
          </a>
        </div>
      </div>
  )
};

export default BtnBox;
