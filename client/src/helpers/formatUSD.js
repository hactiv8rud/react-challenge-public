function formatUSD (number) {
  return `USD ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

export default formatUSD;
