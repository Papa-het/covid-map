import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  @media (min-width: 1200px) {
    max-width: 800px;
  }
  @media (min-width: 768px) {
    max-width: 1020px;
  }
  @media (min-width: 1400px) {
    max-width: 1170px;
    padding-left: 0;
    padding-right: 0;
  }
`;
