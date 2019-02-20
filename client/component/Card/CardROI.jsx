
import blockchain from '../../../lib/blockchain';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';

const CardROI = ({ coin, supply }) => {
  const mncoins = blockchain.mncoins;
  const mns = coin.mnsOff + coin.mnsOn;
  const subsidy = blockchain.getMNSubsidy(coin.blocks, mns, coin.supply);
  const roi = blockchain.getROI(subsidy, coin.mnsOn);

  return (
    <Card>
      <div className="mb-3">
        <div className="h3">
          Active/Total Masternodes
        </div>
        <div className="h5">
          { coin.mnsOn } / { mns }
        </div>
      </div>
      <div className="mb-3">
        <div className="h3">
          Estimated ROI
        </div>
        <div className="h5">
          { numeral(roi).format('0,0.0000') }%
        </div>
      </div>
      <div className="mb-3">
        <div className="h3">
          Coin Supply (Total)
        </div>
        <div className="h5">
          { numeral(supply ? supply.t : 0.0).format('0,0.0000') } SWI
        </div>
      </div>
      <div className="mb-3">
        <div className="h3">
          Coin Supply (Circulating)
        </div>
        <div className="h5">
          { numeral(supply ? supply.c - (mns * mncoins) : 0.0).format('0,0.0000') } SWI
        </div>
      </div>
      <div className="mb-3">
        <div className="h3">
          Market Cap BTC
        </div>
        <div className="h5">
          Coming soon !
        </div>
      </div>
      <div className="mb-3">
        <div className="h3">
          Market Cap USD
        </div>
        <div className="h5">
          Coming soon !
        </div>
      </div>
      <div className="mb-3">
        <div className="h3">
          Coins Locked
        </div>
        <div className="h5">
          { numeral(mns * mncoins).format('0,0.0000') } SWI
        </div>
      </div>
      <div className="mb-3">
        <div className="h3">
          Masternode Worth
        </div>
        <div className="h5">
          Coming soon !
        </div>
      </div>
    </Card>
  );
};

CardROI.propTypes = {
  coin: PropTypes.object.isRequired,
  supply: PropTypes.object.isRequired
};

export default CardROI;
