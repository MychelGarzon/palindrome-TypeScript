import React, { ChangeEvent, useState } from 'react';
import Message from './components/Message';
import Input from './components/Input';

const App: React.FC = () => {
  const [word, setWord] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const isPalindrome = () => {
    const len = word.length;
    for (let i = 0; i < len / 2; i++) {
      if (word[i] !== word[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <Message />
      <Input word={word} handleChange={handleChange} />
      <div>
        {word.length > 0 && (
          isPalindrome() ? <h2>{word} is a palindrome</h2> : <h2>{word} is not a palindrome</h2>
        )}
      </div>
    </>
  );
};

export default App;