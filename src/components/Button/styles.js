import styled from "styled-components";

import { Colors, FontSizes, Spaces, BorderRadius } from "../../shared/DesignTokens";

export const ButtonComponent = styled.button`
    background-color: ${Colors.GREEN};
    color: ${Colors.WHITE};
    font-size: ${FontSizes.TWO_HALF};
    padding: ${Spaces.ONE_HALF};
    border-radius: ${BorderRadius.ONE};
    border: none;
    margin-bottom: ${Spaces.ONE_HALF};
`;
