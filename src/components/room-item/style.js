import styled  from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${props => props.itemWidth};
  box-sizing: border-box;
  padding: 8px;
  .inner {
    .placeholder {
      position: relative;
      padding-top: 66%;
      overflow: hidden;
      border-radius: 5px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .slice {
      position: relative;
      cursor: pointer;
      &:hover .control {
        display: flex;
      }
      .control {
        position: absolute;
        top: 0;
        display: none;
        align-items: center;
        justify-content: center;
        width: 83px;
        height: 100%;
        color: #fff;
        cursor: pointer;
      }
      .left {
        left: 0;
        background-image: linear-gradient(to left,transparent 0%,rgba(0,0,0,0.25) 100%);
      }
      .right {
        right: 0;
        background-image: linear-gradient(to right,transparent 0%,rgba(0,0,0,0.25) 100%);
      }
      .dots {
        position: absolute;
        bottom: 10px;
        width: 30%;
        margin-left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        .dots-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20%;
          flex-shrink: 0;
          cursor: pointer;
          &:hover .dot {
            background-color: pink;
          }
          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #fff;
            transition: all .2s;
            &.active {
              width: 8px;
              height: 8px;
              background-color: pink;
            }
          }
        }
      }
    }
    .desc {
      margin: 10px 0 5px 0;
      font-size: 12px;
      color: ${props => props.color};
      font-weight: 600;
    }
    .name {
      font-size: 16px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      margin: 8px 0;
    }
    .bottom {
      display: flex;
      align-items: center;
      font-size: 12px;
      .css-1lauo1g-MuiRating-root {
        margin-right: 3px;
        font-size: 12px;
        color: ${props => props.theme.second};
        .css-34he1w-MuiRating-decimal {
          margin-right: -2px;
        }
      }
      .lord {
        color: ${props => props.color};
        font-weight: 600;
      }
    }
    
  }
`