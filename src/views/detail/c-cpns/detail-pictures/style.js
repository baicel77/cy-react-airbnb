import styled from "styled-components";

export const DetailPicturesWrapper = styled.div`
  .top {
    display: flex;
    height: 600px;
    cursor: pointer;
    &:hover {
      .cover {
        opacity: 1 !important;
      }
    }
    .left, .right {
      width: 50%;
      height: 100%;
      .item {
        position: relative;
        overflow: hidden;
        &:hover {
          img {
            transform: scale(1.1);
          }
          .cover {
            opacity: 0 !important;
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all .5s;
        }
        .cover {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, .2);
          transition: all .5s;
          opacity: 0;
        }
      }
    }
    .left {
      .item {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 50%;
      }
    }

  }
`