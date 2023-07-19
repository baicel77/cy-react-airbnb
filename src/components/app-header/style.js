import styled  from "styled-components";

export const HeaderWrapper = styled.div`
  .content {
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
   &.fixed .content {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: ${props => props.theme.isAlpha ? 'transparent' : '#fff'};
    z-index: 99;
    transition: all 250ms;
  }
  .content > .top {
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid ${props => props.theme.isAlpha ? 'transparent' : '#eee'};
    transition: all 250ms;
  }
  .content > .bottom {
    height: ${props => props.isShowSearch ? '100px' : '0'};
    transition: height .25s;
  }
  
  .cover {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${props => props.theme.isAlpha ? 'transparent' : 'rgba(0, 0, 0, .3)'};
  }
`