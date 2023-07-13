import styled  from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  .logo {
    margin-left: 24px;
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`