import React from 'react';
import Document from 'myComponents/document';
import './dailyCakeyBot.scss';
import { useSelector, useDispatch } from 'react-redux';


const DailyCakeyBot = () => {
  const NAME = 'Daily Cakey Bot';
  console.log(useSelector((state) => state.currentLink));

  return (
    <Document name={NAME} />
  );
};

export default DailyCakeyBot;
