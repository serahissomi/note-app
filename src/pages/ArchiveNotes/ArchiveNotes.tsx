import React from 'react';
import { MainWrapper } from '../../components';
import { useAppSelector } from '../../hooks/redux';
import { Container, EmptyMsgBox } from '../../styles/styles';

const ArchiveNotes = () => {
  const { ArchiveNotes } = useAppSelector((state) => state.notesList);

  return (
    <Container>
      {ArchiveNotes.length === 0 ? (
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
      ) : (
        <MainWrapper notes={ArchiveNotes} type="Archive" />
      )}
    </Container>
  );
};

export default ArchiveNotes;