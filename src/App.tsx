import React, { FC } from 'react';
import { Hello } from '@/components/Hello'

const App: FC = () => {
  return (
    <div>
      <h1 className='bg-yellow-500 text-green-500'>Hello React</h1>
      <Hello name='Maratib' />
    </div>
  );
};

export default App
