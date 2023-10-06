import styled from "styled-components";
import { Spaces, Colors } from "../../shared/DesignTokens";

export const InputForm = styled.input`
  border: 1px solid ${Colors.GREY};
  padding: ${Spaces.ONE_HALF};
  margin: ${Spaces.ONE_HALF};
  border-radius: 4px;
  font-family: Poppins;
  opacity: 0.95;
  color: ${(props) => (props.disabled ? Colors.WHITE : Colors.GREY)};
  :focus {
    border: 1px solid ${Colors.BLUE};
  }
`;

export const Title = styled.span`
  color: ${Colors.GREEN};
  margin: 0 ${Spaces.ONE_HALF};
`;
