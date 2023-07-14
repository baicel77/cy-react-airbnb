import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  cursor: pointer;
  
  .info {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: ${props => props.color};
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${props => props.color};
    }
    .text {
      margin-right: 6px;
      font-size: 17px;
      font-weight: 600;
    }
  }
`