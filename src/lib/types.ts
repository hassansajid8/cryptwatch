

export type CoinList = {
  id: string,
  symbol: string,
  name: string,
  image: string,
  current_price: string,
  last_updated: Date,
  high_24h: number,
  low_24h: number,
  price_change_percentage_24h: number,
}