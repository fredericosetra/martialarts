import React from 'react';
import CardDashboard from '../../components/cardDashboard';
import * as S from './styled';

function Home() {
  return (
    <>
      <S.Title>Dashboard</S.Title>
      <S.ContainerCards>
        <CardDashboard
          backgroudCard='#00C0EF'
          backgroundStripe='#00ADD7'
          bigNumber='150'
          title='Alunos'
          subtitle='Alunos'
        />

        <CardDashboard
          backgroudCard='#00A65A'
          backgroundStripe='#009551'
          bigNumber='450'
          title='Histórico de Graduações'
          subtitle='Graduações'
        />

        <CardDashboard
          backgroudCard='#F39C12'
          backgroundStripe='#DA8C10'
          bigNumber='27'
          title='Faturas em aberto'
          subtitle='Faturas'
        />

        <CardDashboard
          backgroudCard='#DD4B39'
          backgroundStripe='#C74333'
          bigNumber='89'
          title='Aluno Inativos'
          subtitle='Inativos'
        />
      </S.ContainerCards>
    </>
  );
}

export default Home;
