import { stockDropdownOptions } from '@model/StockDropdownOptions';
import { StockDropdownOption } from '@type/StockDropdown';
import { atom } from 'jotai';

export const stockAttributeAtom = atom<StockDropdownOption | null>(
    stockDropdownOptions[0]
);
