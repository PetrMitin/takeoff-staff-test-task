import React, { FC } from 'react';
import UserInteface from './UserInterface';
import './App.scss';
import { useAppSelector } from '../store/hooks';

const App: FC = () => {
  const isLoading = useAppSelector(state => state.isLoading)

  return (
    <div id="app">
      {isLoading ? 
      <h1>Loading...</h1>
      :
      <UserInteface />}
    </div>)
}

export default App;
