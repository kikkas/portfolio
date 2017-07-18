/*
 *
 *  SVG loader
 *
 */

import React from 'react';


class SvgLoader {
  constructor() {
    this._svg = {
      play_button: 'play_button.svg',
      play: 'play.svg',
      play_back: 'play_back.svg',
      pause: 'pause.svg',
    };

    /* eslint-disable */
    Object.keys(this._svg).forEach((item) => {
      this._svg[item] = (
        <i
          className="svg-icon-wr"
          dangerouslySetInnerHTML={{__html: require('assets/svg/' + this._svg[item])}}
        />
      );
    });
    /* eslint-enable */
  }

  get svg() {
    return this._svg;
  }
}

export default new SvgLoader().svg;
