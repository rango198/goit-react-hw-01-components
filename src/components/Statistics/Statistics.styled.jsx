import styled from '@emotion/styled';
import { getRandomHexColor } from 'helpers/getRandomHexColor';

export const ContainerStat = styled.section`
  display: flex;
`;

export const TitleStats = styled.h2`
  size: 16px;
`;

export const StaticList = styled.ul`
  display: flex;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 20px auto;
  /* margin-bottom: 5px; */
  max-width: 100%;
  width: 360px;

  box-shadow:
    -1px -1px 1px rgb(95, 113, 177),
    1px 1px 1px rgb(95, 113, 177);
  border-radius: 8px;
`;

export const Title = styled.h2`
  padding-bottom: 10px;
  border-bottom: 1px solid #3046d6;
  color: #353333;
  text-shadow: 1px 1px 1px #ecdada;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export const StatList = styled.ul`
  /* width: 100%; */
  display: flex;
  /* align-items: center; */
  gap: 8px;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  text-shadow: 0 0 1px #000;

  :first-of-type {
    border-bottom-left-radius: 0.5rem;
  }

  :last-of-type {
    border-bottom-right-radius: 0.5rem;
  }

  padding: 3px;
  background-color: ${props => getRandomHexColor(props.index)};
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: #534e4e;
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #574747;
`;
