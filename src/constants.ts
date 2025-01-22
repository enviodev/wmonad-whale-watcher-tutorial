export const EXPLORER_URL_MONAD = process.env.ENVIO_EXPLORER_URL_MONAD;
export const WHALE_THRESHOLD_WEI = process.env.ENVIO_WHALE_THRESHOLD_WEI; // in wei wMonad
export const BOT_TOKEN = process.env.ENVIO_BOT_TOKEN; // telegram bot token
export const CHANNEL_ID = process.env.ENVIO_TELEGRAM_CHANNEL_ID ; // wMonad whale watcher channel
export const MESSAGE_THREAD_ID = process.env.ENVIO_TELEGRAM_MESSAGE_THREAD_ID; // wMonad - notification topic

export const explorerUrlAddress = (address: string) =>
  EXPLORER_URL_MONAD + "address/" + address;
export const explorerUrlTx = (txHash: string) =>
  EXPLORER_URL_MONAD + "tx/" + txHash;


  