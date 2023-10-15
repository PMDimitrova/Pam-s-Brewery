import styled from 'styled-components';
import PropTypes from 'prop-types';

import typography from '../../_constants/typography';
import colors from '../../_constants/colors';

const Text = ({
  heading,
  body,
  component,
  weight = 400, // Ccs prop font-weight
  color = 'fontMain',
  onHoverColor,
  text,
  children,
  id,
  onClick,
  textAlign,
  isOverflowingEllipsis = false,
  textTransform,
  maxWidth, // Only string, so use 'px' as suffice
  isNotSelectable,
}) => {
  return (
    <Wrap
      $typographyType={(heading && 'heading') || 'body'}
      $typographySize={heading || body || 1}
      $weight={weight}
      $hoverColor={onHoverColor}
      $textColor={color}
      $textTransform={textTransform}
      id={id}
      onClick={onClick}
      $cursor={onClick ? 'pointer' : 'inherit'}
      as={component || (heading ? `h${heading}` : undefined)}
      $textAlign={textAlign}
      $withEllipsis={isOverflowingEllipsis}
      $maxWidth={maxWidth}
      $isNotSelectable={isNotSelectable}
    >
      {children || text}
    </Wrap>
  );
};

export default Text;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  heading: PropTypes.oneOf([1, 2, 3]),
  body: PropTypes.oneOf([1, 2]),
  text: PropTypes.string,
  component: PropTypes.oneOf(['div', 'span', 'p']),
  weight: PropTypes.oneOf([400, 500, 700]),
  id: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['fontSecondary', 'fontMain', 'fontHover']),
  textAlign: PropTypes.oneOf(['start', 'end', 'center']),
  onHoverColor: PropTypes.oneOf(['fontMain', 'fontSecondary', 'fontHover']),
  isOverflowingEllipsis: PropTypes.bool,
  textTransform: PropTypes.oneOf(['capitalize', 'uppercase', 'lowercase', 'none']),
  maxWidth: PropTypes.string,
  isNotSelectable: PropTypes.bool,
};

const Wrap = styled.div`
  font-size: ${props => typography[props.$typographyType][props.$typographySize].font_size}px;
  font-weight: ${props => props.$weight};
  text-transform: ${props => props.$textTransform};
  max-width: ${props => props.$maxWidth};
  color: ${props => colors[props.$textColor]};
  transition: color 0.3s ease;
  text-align: ${props => props.$textAlign};
  text-overflow: ${props => (props.$withEllipsis ? 'ellipsis' : undefined)};
  overflow: ${props => (props.$withEllipsis ? 'hidden' : undefined)};
  cursor: ${props => props.$cursor};
  user-select: ${props => (props.$isNotSelectable ? 'none' : 'auto')};

  &:hover {
    color: ${props => colors[props.$hoverColor]};
  }

  a {
    font-size: inherit;
    font-weight: inherit;

    &:before,
    &:after {
      display: none;
    }
  }

  span,
  a {
    display: inline-block;
  }
`;
