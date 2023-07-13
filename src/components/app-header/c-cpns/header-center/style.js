import styled  from "styled-components";

export const CenterWrapper = styled.div`
  width: 300px;
  .search-bar {
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 0 8px 0 25px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    .text {
      color: ${props => props.theme.text.second};
      font-weight: 600;
      font-size: 14px;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${props => props.theme.primary};
      color: #fff;
    }
    
  }
`