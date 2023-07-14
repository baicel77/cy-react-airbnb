import styled from "styled-components";

export const TabWrapper = styled.div`
  .item {
    flex-shrink: 0;
    flex-basis: 120px;
    white-space: nowrap;
    box-sizing: border-box;
    background-color: #fff;
    margin-right: 16px;
    padding: 14px 16px;
    border-radius: 3px;
    border: .5px solid #d8d8d8;
    font-size: 17px;
    color: ${props => props.theme.text.primary};
    text-align: center;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    &.active {
      background-color: ${props => props.theme.second};
      color: #fff;
    }
  }
`