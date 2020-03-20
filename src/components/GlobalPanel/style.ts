import styled from 'styled-components';

export const GlobalPanelWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  width: calc(25vw);
  z-index: 2;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px;
`;

export const GlobalPanelItem = styled.div`
  text-align: center;
  border: 1px solid #c2c2c2;
  width: 80%;
  margin-top: 10px;
`;

export const GlobalPanelItemCount = styled.h2`
  font-size: 34px;
  padding: 10px 0 10px;
  color: #4c4c4c;
`;

export const GlobalPanelItemTitle = styled.h4`
  padding: 20px 0 20px;
`;
