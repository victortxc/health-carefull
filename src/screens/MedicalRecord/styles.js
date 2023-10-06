import styled from "styled-components";
import { Colors, FontSizes, Spaces } from "../../shared/DesignTokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${Spaces.THREE};
`;

export const Title = styled.h1`
    font-size: ${FontSizes.THREE};
    text-align: center;
    color: ${Colors.DARK_BLUE};
    margin-bottom: ${Spaces.ONE_HALF};
`;

export const DivideInputContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: ${Spaces.TWO};
  align-items: center;
  border-radius: 22px;
`;

export const Label = styled.p`
  color: ${Colors.WHITE};
  text-align: left;
  font-family: Poppins;
  padding: ${Spaces.ONE_HALF} 0;
  font-size: ${FontSizes.TWO};
`;

export const TextArea = styled.textarea`
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
  height: 200px;
`;

export const Select = styled.select`
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

export const Span = styled.span`
  color: ${Colors.GREEN};
  margin: 0 ${Spaces.ONE_HALF};
`;
