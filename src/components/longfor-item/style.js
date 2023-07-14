import styled from "styled-components";

export const LongforItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  padding: 8px;
  box-sizing: border-box;
  .inner {
    position: relative;
    .album {
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
      }
      &::after {
        content: '';
        position: absolute;
        height: 60%;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .03);
      }
    }
    .info {
      position: absolute;
      bottom: 10%;
      color: #fff;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      .city {
        margin-bottom: 5px;
        font-size: 18px;
        font-weight: 600;
      }
      .price {
        font-size: 14px;
      }
    }
  }
`