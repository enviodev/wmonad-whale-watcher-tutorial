import { ERC20 } from "generated";
import { isIndexingAtHead, indexBalances } from "./libs/helpers";
import { fetchEnsHandle } from "./libs/ens";
import { sendMessageToTelegram } from "./libs/telegram";
import { weiToEth } from "./libs/eth";
import { WHALE_THRESHOLD_WEI, explorerUrlAddress, explorerUrlTx } from "./constants";


ERC20.Transfer.handler(async ({ event, context }) => {

  if (isIndexingAtHead(event.block.timestamp) && event.params.value >= BigInt(WHALE_THRESHOLD_WEI)) {
    const ensHandleOrFromAddress = await fetchEnsHandle(event.params.from); 
    const ensHandleOrToAddress = await fetchEnsHandle(event.params.to);
    const msg = `wMonad WHALE ALERT 🐋: A new transfer has been made by <a href="${explorerUrlAddress(
      event.params.from
    )}">${ensHandleOrFromAddress}</a> to <a href="${explorerUrlAddress(
      event.params.to
    )}">${ensHandleOrToAddress}</a> for ${weiToEth(event.params.value)} wMonad! 🔥 - <a href="${explorerUrlTx(
      event.transaction.hash
    )}">transaction</a>`;

    console.log(msg);
    await sendMessageToTelegram(msg);
  }

  // This code indexes the balances of the accounts that have sent or received tokens and can be used to query account balances, it is not needed for the notifications
  await indexBalances(context, event);
});
