import styled from 'styled-components';

export const PanelWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 0;
  width: calc(20vw);
  z-index: 2;
  background-color: #fff;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px;
  overflow-y: scroll;
`;

export const PanelTitle = styled.h3`
  margin-bottom: 15px;
`;

export const PanelItem = styled.div`
  border: 1px solid #c2c2c2;
  width: 80%;
  margin-top: 10px;
  padding: 10px;

  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
`;
