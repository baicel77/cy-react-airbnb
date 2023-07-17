import styled  from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: ${props => props.theme.text.primary};
  .btns {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: 600;
    .btn {
      border-radius: 22px;
      padding: 12px 15px;
      cursor: pointer;
      &:hover { 
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 42px;
    margin-right: 24px;
    border: 1px solid #ddd;
    border-radius: 42px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    .menu {
      margin-right: 10px;
    }
    .panel {
      position: absolute;
      top: 50px;
      right: 0;
      width: 240px;
      color: #666;
      font-weight: 600;
      border-radius: 10px;
      box-shadow: 0 0 3px rgba(0, 0, 0, .18);
      background-color: #fff;
      z-index: 9;
      .top, .bottom {
        padding: 10px 0;
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
      .item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`