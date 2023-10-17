import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../_constants/colors';

// TODO: mapping for different color buttons? would I need this?

const Button = ({ text, size = 1, onClick, isDisabled, isFluid }) => {
  return (
    <Wrap $size={size} $isFluid={isFluid} $isDisabled={isDisabled} onClick={e => !isDisabled && onClick && onClick(e)}>
      {text && <span>{text}</span>}
    </Wrap>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2]),
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isFluid: PropTypes.bool,
};

const Wrap = styled.div`
  display: flex;
  width: ${({ $isFluid }) => ($isFluid ? '100%' : null)};
  height: ${props => (props.$size === 1 ? 40 : 48)}px;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: ${props => (props.$isDisabled ? 'none' : 'auto')};
  font-size: ${props => (props.$size === 1 ? 20 : 24)}px;
  font-weight: 900;
  word-wrap: break-word;
  border-radius: 4px;
  background-color: ${colors.btnBackgroundMain};
  color: ${colors.textMain};
  box-shadow: ${`0 0 0 3px ${colors.btnBackgroundMain}`};
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    background-color: ${colors.btnBackgroundHover};
  }
`;
