import { stockAttributeAtom } from '@state/atoms/StockAttribute';
import { useAtom } from 'jotai';

export function useStockAttribute() {
    return useAtom(stockAttributeAtom);
}
