import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
    margin: 0 9px;
    &.Mui-selected, &:hover, &.Mui-selected:hover {
      background-color: #222;
      color: #fff;
    }
  }
  .text {
    margin-top: 20px;
  }
`