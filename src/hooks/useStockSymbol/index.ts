import { stockSymbolAtom } from '@state/atoms/StockSymbol';
import { useAtom } from 'jotai';

export function useStockSymbol() {
    return useAtom(stockSymbolAtom);
}
