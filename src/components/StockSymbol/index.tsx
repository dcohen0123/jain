import { Input } from 'antd';
import { useState } from 'react';
import { useStockSymbol } from '@hooks/useStockSymbol';

const StockSymbol: React.FC = () => {
    const [symbol, setSymbol] = useStockSymbol();
    const [input, setInput] = useState<string>(symbol ?? '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleEnter = () => {
        const trimStr = input?.trim()?.toUpperCase();
        if (trimStr) {
            setSymbol(trimStr);
        }
    };

    return (
        <Input
            type="text"
            style={{ width: '100%' }}
            value={input}
            onChange={handleChange}
            placeholder="Enter stock symbol"
            onPressEnter={handleEnter}
        />
    );
};

export default StockSymbol;
