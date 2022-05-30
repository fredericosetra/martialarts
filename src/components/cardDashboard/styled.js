import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 150px;
  background-color: ${props =>
    props.backgroudCard ? props.backgroudCard : '#C0C0C0'};
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const TextInfo = styled.div`
  font-size: 16px;
  color: white;
  display: flex;
  justify-content: center;
`;

export const TextLink = styled(TextInfo)`
  font-size: 14px;
  padding: 0 4px 0 0;
`;

export const BigNumber = styled(TextInfo)`
  font-size: 40px;
  padding: 0 0 8px 0;
`;

export const StripeBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: ${props =>
    props.backgroundStripe ? props.backgroundStripe : '#A9A9A9'};
  font-size: 14px;
  color: white;
`;
