import PublishButton from '../components/PublishButton';
import Form from '../components/Form';
import React, { useState } from 'react';

export interface IState {
  note: {
    title: string;
    author: string;
    content: string;
  };
}

const Create: React.FC = () => {
  const [note, setNote] = useState<IState['note']>({
    title: '',
    author: '',
    content: '',
  });

  return (
    <>
      <Form note={note} setNote={setNote} />
      <PublishButton note={note} />
    </>
  );
};

export default Create;
