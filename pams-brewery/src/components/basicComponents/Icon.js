import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../_constants/colors';

const Icon = ({ icon, isSolidIcon, size = 12, color = 'iconMain' }) => {
  const type = isSolidIcon ? 'fa-solid' : 'fa-regular';

  return <Wrap $size={size} className={`${type} ${icon}`} $color={color} />;
};

export default Icon;

Icon.propTypes = {
  icon: PropTypes.string,
  isSolidIcon: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.oneOf(['iconMain', 'iconSecondary', 'iconTertiary']),
};

const Wrap = styled.i`
  font-size: ${props => props.$size}px;
  color: ${props => colors[props.$color]};
  transition: color 0.3s ease;
`;
