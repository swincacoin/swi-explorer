
import Component from '../../core/Component';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import CountUp from '../CountUp';
import GraphLine from '../Graph/GraphLine';
import Icon from '../Icon';

export default class CardStatus extends Component {
  static defaultProps = {
    btc: 0.0,
    usd: 0.0,
    xAxis: [],
    yAxis: []
  };

  static propTypes = {
    btc: PropTypes.number.isRequired,
    usd: PropTypes.number.isRequired,
    xAxis: PropTypes.array.isRequired,
    yAxis: PropTypes.array.isRequired
  };

  render() {
    const len = this.props.yAxis.length;
    const yAxis = this.props.yAxis;
    let growth = len > 0
      ? (yAxis[0] - yAxis[len - 1]) / yAxis[len - 1]
      : 0;
    if (!isFinite(growth)) {
      growth = 0.0;
    }
    const isPos = growth >= 0;
    const dirArrow = isPos ? 'arrow-up' : 'arrow-down';

    return (
	  <div></div>
    );
  };
}
