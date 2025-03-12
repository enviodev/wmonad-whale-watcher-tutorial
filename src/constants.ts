export const EXPLORER_URL_MONAD = "https://testnet.monadexplorer.com/";
export const THRESHOLD_WEI: string = process.env.ENVIO_THRESHOLD_WEI ?? "1"; // in wei WMON
export const BOT_TOKEN = process.env.ENVIO_BOT_TOKEN; // telegram bot token
export const CHANNEL_ID = process.env.ENVIO_TELEGRAM_CHANNEL_ID ; // WMON whale watcher channel
export const MESSAGE_THREAD_ID = process.env.ENVIO_TELEGRAM_MESSAGE_THREAD_ID; // WMON - notification topic

export const explorerUrlAddress = (address: string) =>
  EXPLORER_URL_MONAD + "address/" + address;
export const explorerUrlTx = (txHash: string) =>
  EXPLORER_URL_MONAD + "tx/" + txHash;


  