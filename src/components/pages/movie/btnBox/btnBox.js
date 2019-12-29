import React from 'react';
import btnBox from './btnBox.module.css'
import Share from '../../../../assets/share.svg';
import Like from '../../../../assets/like.svg';
import Flick from '../../../../assets/icon.svg';

const BtnBox = ()=> {
  return (
      <div className={btnBox.btn_box}>
        <div className={btnBox.btn}>
          <a href="#1">
            <img
                src={Share}
                className={btnBox.btn__svg + btnBox.btn__share + btnBox.btn__shadow}
                alt="share"
            />
          </a>
        </div>
        <div className={btnBox.btn}>
          <a href="#2">
            <img
                src={Flick}
                className={btnBox.btn__svg + btnBox.btn__flick + btnBox.btn__shadow}
                alt="flick-me"
            />
          </a>
        </div>
        <div className={btnBox.btn}>
          <a href="#3">
            <img
                src={Like}
                className={btnBox.btn__svg + btnBox.btn__like + btnBox.btn__shadow}
                alt="like"
            />
          </a>
        </div>
      </div>
  )
};

export default BtnBox;
