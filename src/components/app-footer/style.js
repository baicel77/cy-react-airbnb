import styled  from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;
  .wrapper {
    width: 1080px;
    margin: 0 auto;
    padding: 48px 24px;
    .service {
      display: flex;
      .service-item {
        flex: 1;
        .name {
          margin-bottom: 16px;
          color: #000;
          font-weight: 600;
        }
        .list {
          color: #767676;
          .list-item {
            margin-bottom: 8px;
            cursor: pointer;
            span {
              &:hover {
                border-bottom: 1px solid #767676;
              }
            }
            
          }
        }
      }
    }
    .statement {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      text-align: center;
      color: #767676;
    }
  }
`