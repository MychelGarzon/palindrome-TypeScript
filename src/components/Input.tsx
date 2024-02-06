import React, { ChangeEvent } from 'react'

interface InputProps {
    word: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ word, handleChange }) => {
    return (
        <>
            <div>
                <input type="text" value={word} onChange={handleChange} placeholder="Type a word or number" />
            </div>
        </>
    );
};

export default Input