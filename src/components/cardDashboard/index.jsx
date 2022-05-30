import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import * as S from './styled';

function CardDashboard({
  bigNumber,
  title,
  subtitle,
  backgroudCard,
  backgroundStripe,
}) {
  return (
    <S.Container backgroudCard={backgroudCard}>
      <S.TextContainer>
        <S.BigNumber>{bigNumber}</S.BigNumber>
        <S.TextInfo>{title}</S.TextInfo>
      </S.TextContainer>
      <Link to='/alunoativos'>
        <S.StripeBottom backgroundStripe={backgroundStripe}>
          <S.TextLink>Ver {subtitle}</S.TextLink>
          <ArrowRightAltIcon fontSize='medium' />
        </S.StripeBottom>
      </Link>
    </S.Container>
  );
}

export default CardDashboard;
