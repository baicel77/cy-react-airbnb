import styled  from "styled-components";

export const ItemWrapper = styled.div`
  width: 25%;
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