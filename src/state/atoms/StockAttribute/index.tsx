import { stockDropdownOptions } from '@model/StockDropdownOptions'
import { StockDropdownOption } from '@components/StockDropdown/types'
import { atom } from 'jotai'

export const stockAttributeAtom = atom<StockDropdownOption | null>(
    stockDropdownOptions[0]
)
