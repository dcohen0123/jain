import { Select } from 'antd';
import { useStockAttribute } from '@hooks/useStockAttribute';
import { stockDropdownOptions } from '@model/StockDropdownOptions';
import { StockDropdownOption } from '../../types/StockDropdown';

const StockDropdown: React.FC = () => {
    const [selectedAttribute, setSelectedAttribute] = useStockAttribute();

    const handleChange = (
        _: string,
        option?: StockDropdownOption | StockDropdownOption[]
    ) => {
        setSelectedAttribute(option as StockDropdownOption[]);
    };

    return (
        <Select
            style={{ width: '100%' }}
            defaultValue={selectedAttribute?.[0]?.value}
            onChange={handleChange}
            mode="multiple"
            options={stockDropdownOptions}
        />
    );
};

export default StockDropdown;
