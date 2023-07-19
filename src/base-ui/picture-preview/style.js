import styled from "styled-components";

export const PicturePreviewWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;
  z-index: 99;
  .top {
    position: relative;
    height: 86px;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  .content {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    .picture {
      position: relative;
      width: 100%;
      max-width: 105vh;
      height: 100%;
      overflow: hidden;
      .switch-enter {
        transform: ${props => props.isNext ? 'translateX(100%)' : 'translateX(-100%)'};
        opacity: 0;
      }
      .switch-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 250ms ease;
      }
      .switch-exit {
        opacity: 1;
      }
      .switch-exit-active {
        opacity: 0;
        transition: all 250ms ease;
      }
      img {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
      }
    }
    .btn {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 83px;
      height: 100%;
      cursor: pointer;
      color: #fff;
      &.left {
        left: 0;
      }
      &.right {
        right: 0;
      }
    }
  }
  .bottom {
    position: relative;
    height: 100px;
    max-width: 105vh;
    width: 100%;
    margin: 10px auto 0;
    .inner {
      position: absolute;
    }
    .info {
      position: absolute;
      width: 100%;
      bottom: ${props => props.isShowIndicator ? '77px' : '10px'};
      transition: all .25s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .toggle {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
    .list {
      position: absolute;
      bottom: 10px;
      height: ${props => props.isShowIndicator ? '67px' : '0'};
      transition: all .25s ease;
      overflow: hidden;
      .item {
        flex-shrink: 0;
        height: 67px;
        margin-right: 15px;
        opacity: 0.5;
        cursor: pointer;
        &.active {
          opacity: 1;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  
`