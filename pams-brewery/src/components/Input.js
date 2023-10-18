import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../_constants/colors';

const Input = ({ name, value, size = 1, isFocused, onChange, onKeyDown, placeholder, minLength }) => {
  return (
    <Wrap
      $name={name}
      $value={value}
      $size={size}
      onChange={e => onChange(e)}
      onKeyDown={e => onKeyDown(e)}
      placeholder={placeholder}
      $minLength={minLength}
      className={isFocused ? 'is-focused' : undefined}
    />
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf([1, 2]),
  isFocused: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  minLength: PropTypes.number,
};

const Wrap = styled.input`
  display: flex;
  width: 100%;
  min-width: ${props => (props.$minLength ? props.$minLength : null)}px;
  height: ${props => (props.$size === 1 ? 40 : 48)}px;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  font-family: 'Zilla Slab';
  font-size: ${props => (props.$size === 1 ? 18 : 22)}px;
  font-weight: 700;
  border-radius: 6px;
  border-color: transparent;
  outline: none;
  background-color: ${colors.inputMain};
  color: ${colors.textTertiary};
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    color 0.3s ease;

  &.is-focused,
  &:hover {
    box-shadow: inset 0 0 0 2px ${colors.btnBackgroundMain};
  }

  &:focus-visible {
  }
`;
