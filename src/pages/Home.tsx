import Button from '../components/Button';
import Form from '../components/Form';
import { IState as IAppState } from '../App';
import React from 'react';

interface IProps {
  note: IAppState['note'];
  setNote: React.Dispatch<React.SetStateAction<IAppState['note']>>;
}

const Home: React.FC<IProps> = ({ note, setNote }) => {
  return (
    <>
      <Form note={note} setNote={setNote} />
      <Button note={note} />
    </>
  );
};

export default Home;
