import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../_constants/colors';

const Icon = ({ icon, size = 12, color, onClick }) => {
  return <Wrap $size={size} className={icon} $color={color} onClick={onClick} />;
};

export default Icon;

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.oneOf(['iconMain', 'iconSecondary']),
  onClick: PropTypes.func,
};

const Wrap = styled.i`
  font-size: ${props => props.$size}px;
  color: ${props => colors[props.$color]};
  transition: color 0.3s ease;
`;
