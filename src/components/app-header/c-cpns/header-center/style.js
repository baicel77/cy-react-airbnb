import styled  from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    .text {
      color: ${props => props.theme.text.second};
      font-weight: 600;
      font-size: 14px;
      padding: 0 16px;
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
  .tab {
    .name {
      display: flex;
      .item {
        width: 64px;
        height: 20px;
        margin: 10px 16px;
        padding-bottom: 10px;
        font-size: 16px;
        cursor: pointer;
        color: ${props => props.theme.isAlpha ? '#fff' : '#333'};
        &.active {
          border-bottom: 2px solid ${props => props.theme.isAlpha ? '#fff' : '#333'};
        }
      }
    }
    .info {
      position: absolute;
      left: 50%;
      top: 80px;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      width: 850px;
      height: 66px;
      border-radius: 32px;
      border: 1px solid #ddd;
      background-color: #fff;
      .inner {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        &:hover {
          background-color: #eee;
          border-radius: 32px;
          .item {
            border-right: none;
          }
        }
        .item {
          padding: 0 30px;
          border-right: 1px solid #ddd;
          .title {
            color: #222;
            font-weight: 600;
            font-size: 12px;
          }
          .desc {
            color: #666;
          }
        }
      }
    }
  }
  .tab-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .tab-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .tab-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .tab-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
  
`