const menuItems = [
  { text: "Home", icon: "fa fa-home", path: "/" },
  { text: "Dashboard", icon: "fa-solid fa-gauge", path: "/dashboard" },
  { text: "My Wallet", icon: "fa-solid fa-wallet", path: "/my-wallet" },
  { text: "Transaction", icon: "fa-solid fa-coins", path: "/transaction" },
  { text: "Crypto", icon: "fa-brands fa-bitcoin", path: "/crypto" },
];

const wallet = [
  {
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    name: "Bitcoin",
    value: "1,200",
  },
  {
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    name: "Ethereum",
    value: "1,900",
  },
  {
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
    name: "Tether",
    value: "900",
  },
  {
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    name: "BNB",
    value: "2000",
  },
  {
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    name: "XRP",
    value: "2000",
  },
  {
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    name: "Solana",
    value: "2000",
  },
];

const notifications = [
  {
    title: "Notification 1",
    date: "12/12/2022",
    time: "12:00",
  },
  {
    title: "Notification 2",
    date: "18/1/2022",
    time: "12:00",
  },
  {
    title: "Notification 3",
    date: "5/7/2022",
    time: "12:00",
  },
];

const messages = [
  {
    title: "Message 1",
    date: "12/12/2022",
    time: "12:00",
  },
];

const gifts = [
  {
    title: "Gift 1",
    date: "12/12/2022",
    time: "12:00",
  },
  {
    title: "Gift 2",
    date: "18/1/2022",
    time: "12:00",
  },
  {
    title: "Gift 3",
    date: "5/7/2022",
    time: "12:00",
  },
  {
    title: "Gift 4",
    date: "9/7/2022",
    time: "12:00",
  },
];

const charts = [
  { title: "Market overview", swing: [40, 14, 60, 72, 20, 9, 29, 33, 56, 40] },
  { title: "Market today", swing: [15, 33, 25, 9, 18, 30, 45, 60, 73, 45] },
  { title: "Market last day", swing: [39, 70, 80, 55, 34, 70, 45, 57, 36, 70] },
  { title: "Market place", swing: [4, 35, 56, 46, 78, 15, 60, 56, 70, 75] },
  { title: "Market news", swing: [1, 30, 8, 35, 40, 20, 39, 47, 50, 35] },
];

const transactions = [
  {
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    amount: 1.2,
    date: "12/12/2022",
    time: "12:00",
  },
  {
    name: "Terra",
    image:
      "https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072",
    amount: -3,
    date: "12/12/2022",
    time: "12:00",
  },
  {
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    amount: 5.7,
    date: "12/12/2022",
    time: "12:00",
  },
  {
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    amount: 9,
    date: "12/12/2022",
    time: "12:00",
  },
  {
    name: "USD Coin",
    image:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
    amount: -7,
    date: "12/12/2022",
    time: "12:00",
  },
];

export {
  wallet,
  notifications,
  messages,
  gifts,
  charts,
  transactions,
  menuItems,
};
