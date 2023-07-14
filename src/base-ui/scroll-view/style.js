import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  .inner {
    overflow: hidden;
    .tabs {
      display: flex;
      flex-wrap: nowrap;
      transition: all .25s;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
      cursor: pointer;
      z-index: 9;
      &.left {
        left: -15px;
      }
      &.right {
        right: -15px;
      }
    }
  }
  
`
