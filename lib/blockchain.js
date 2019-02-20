
const params = {
  LAST_POW_BLOCK: 400,
  RAMP_TO_BLOCK: 0,
  LAST_SEESAW_BLOCK: 0
};

const avgBlockTime = 60; // 1 minute (60 seconds)

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 1440

const blocksPerWeek = blocksPerDay * 7; // 10080

const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 43830

const blocksPerYear = blocksPerDay * 365.25; // 525960

const mncoins = 10000.0;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0, nMasternodeCount = 0, nMoneySupply = 0) => {
  const blockValue = getSubsidy(nHeight);
  let ret = 0.0;

  ret = blockValue / 2;
  
  
  return ret;
};

const getSubsidy = (nHeight = 1) => {
  let nSubsidy = 0.0;

  if (nHeight == 0) {
      nSubsidy = 1;
  } else if (nHeight == 1) {
      nSubsidy = 200000000; // Mainnet premine : 200,000,000 SWI
  } else if (nHeight < 259200 && nHeight > 1) {                
  	nSubsidy = 250;
  } else if (nHeight < 518400 && nHeight >= 259200) {                
  	nSubsidy = 200;
  } else if (nHeight < 777600 && nHeight >= 518400) {                
  	nSubsidy = 150;
  } else if (nHeight < 1036800 && nHeight >= 777600) {                
  	nSubsidy = 125;
  } else if (nHeight < 1296000 && nHeight >= 1036800) {                
  	nSubsidy = 110;
  } else if (nHeight < 1814400 && nHeight >= 1296000) {                
  	nSubsidy = 105;
  } else if (nHeight < 2332800 && nHeight >= 1814400) {                
  	nSubsidy = 100;
  } else if (nHeight < 2851200 && nHeight >= 2332800) {                
  	nSubsidy = 95;
  } else if (nHeight < 3369600 && nHeight >= 2851200) {                
  	nSubsidy = 90;
  } else if (nHeight < 3888000 && nHeight >= 3369600) {                
  	nSubsidy = 85;
  } else if (nHeight < 4406400 && nHeight >= 3888000) {                
  	nSubsidy = 80;
  } else if (nHeight < 4924800 && nHeight >= 4406400) {                
  	nSubsidy = 75;
  } else if (nHeight < 5443200 && nHeight >= 4924800) {                
  	nSubsidy = 70;
  } else if (nHeight < 5961600 && nHeight >= 5443200) {                
  	nSubsidy = 65;
  } else if (nHeight < 6480000 && nHeight >= 5961600) {                
  	nSubsidy = 60;
  } else if (nHeight < 6998400 && nHeight >= 6480000) {                
  	nSubsidy = 55;
  } else if (nHeight < 7516800 && nHeight >= 6998400) {                
  	nSubsidy = 50;
  } else if (nHeight < 8035200 && nHeight >= 7516800) {                
  	nSubsidy = 45;
  } else if (nHeight < 8553600 && nHeight >= 8035200) {                
  	nSubsidy = 40;
  } else if (nHeight < 9072000 && nHeight >= 8553600) {                
  	nSubsidy = 35;
  } else if (nHeight < 9590400 && nHeight >= 9072000) {                
  	nSubsidy = 30;
  } else if (nHeight < 10108800 && nHeight >= 9590400) {                
  	nSubsidy = 25;
  } else if (nHeight < 10627200 && nHeight >= 10108800) {                
  	nSubsidy = 20;
  } else if (nHeight < 11145600 && nHeight >= 10627200) {                
  	nSubsidy = 15;
  } else if (nHeight < 11664000 && nHeight >= 11145600) {                
  	nSubsidy = 10;
  } else if (nHeight < 12182400 && nHeight >= 11664000) {                
  	nSubsidy = 5;
  }
  return nSubsidy;
};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string');
};

const isPoS = (b) => {
  return !!b && b.height > 400; // > 400
};

const isTX = (s) => {
  return typeof(s) === 'string' && s.length === 64;
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isPoS,
  isTX
};
