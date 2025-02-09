import { Select } from 'antd';
import { useStockAttribute } from '@hooks/useStockAttribute';
import { stockDropdownOptions } from '@model/StockDropdownOptions';
import { StockDropdownOption } from './types';

const StockDropdown: React.FC = () => {
    const [selectedAttribute, setSelectedAttribute] = useStockAttribute();

    const handleChange = (
        _: string,
        option?: StockDropdownOption | StockDropdownOption[]
    ) => {
        setSelectedAttribute(option as StockDropdownOption);
    };

    return (
        <Select
            style={{ width: '100%' }}
            value={selectedAttribute?.value}
            onChange={handleChange}
            options={stockDropdownOptions}
        />
    );
};

export default StockDropdown;
