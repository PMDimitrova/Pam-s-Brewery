import styled from 'styled-components';
import PropTypes from 'prop-types';

const Stack = ({
  direction = 'column', // Shortened flex-direction css property
  component = 'div',
  justifyContent,
  alignItems,
  children,
  spacing,
  flex,
  width = 'auto', // Only string, so use 'px' as suffice
  height = 'auto', // Only string, so use 'px' as suffice
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  cursor,
  maxWidth, // Only string, so use 'px' as suffice
  maxHeight, // Only string, so use 'px' as suffice
  minWidth, // Only string, so use 'px' as suffice
  minHeight, // Only string, so use 'px' as suffice
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  onClick,
  id,
}) => {
  const directionMarginProp = {
    row: 'margin-right',
    'row-reverse': 'margin-left',
  };

  const childrenStyles = `${directionMarginProp[direction] || 'margin-bottom'}: ${spacing}px`;

  return (
    <Wrap
      id={id}
      onClick={onClick}
      as={component}
      $childrenStyles={childrenStyles}
      $position={position}
      $justifyContent={justifyContent}
      $direction={direction}
      $alignItems={alignItems}
      $flex={flex}
      $width={width}
      $height={height}
      $top={top}
      $left={left}
      $right={right}
      $bottom={bottom}
      $zIndex={zIndex}
      $maxWidth={maxWidth}
      $maxHeight={maxHeight}
      $minWidth={minWidth}
      $minHeight={minHeight}
      $margin={margin}
      $marginLeft={marginLeft}
      $marginRight={marginRight}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      $padding={padding}
      $paddingLeft={paddingLeft}
      $paddingRight={paddingRight}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $cursor={onClick ? 'pointer' : cursor}
    >
      {children}
    </Wrap>
  );
};

export default Stack;

Stack.propTypes = {
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48])]),
  direction: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.object, PropTypes.array]),
  component: PropTypes.oneOf(['div', 'span']),
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  id: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cursor: PropTypes.oneOf(['help', 'wait', 'pointer']),
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  margin: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  marginTop: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  marginLeft: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  marginRight: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  padding: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  paddingLeft: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  paddingRight: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  paddingTop: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  paddingBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 8, 16, 24, 32, 40, 48]),
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  position: PropTypes.oneOf([
    'fixed',
    'relative',
    'absolute',
    'sticky',
    'static',
    'revert',
    'inherit',
    'initial',
    'unset',
  ]),
  top: PropTypes.oneOf(['fixed', 'relative', 'absolute', 'sticky', 'static', 'revert', 'inherit', 'initial', 'unset']),
  bottom: PropTypes.oneOf([
    'fixed',
    'relative',
    'absolute',
    'sticky',
    'static',
    'revert',
    'inherit',
    'initial',
    'unset',
  ]),
  left: PropTypes.oneOf(['fixed', 'relative', 'absolute', 'sticky', 'static', 'revert', 'inherit', 'initial', 'unset']),
  right: PropTypes.oneOf([
    'fixed',
    'relative',
    'absolute',
    'sticky',
    'static',
    'revert',
    'inherit',
    'initial',
    'unset',
  ]),
};

const Wrap = styled.div`
  display: flex;
  flex: ${props => props.$flex};
  position: ${props => props.$position};
  justify-content: ${props => props.$justifyContent};
  flex-direction: ${props => props.$direction};
  align-items: ${props => props.$alignItems};
  width: ${props => props.$width};
  height: ${props => props.$height};
  top: ${props => props.$top};
  left: ${props => props.$left};
  right: ${props => props.$right};
  bottom: ${props => props.$bottom};
  z-index: ${props => props.$zIndex};
  max-width: ${props => props.$maxWidth};
  min-width: ${props => props.$minWidth};
  max-height: ${props => props.$minWidth};
  min-height: ${props => props.$minWidth};
  margin: ${props => (props.$minWidth ? `${props.$margin}px` : undefined)};
  margin-left: ${props => (props.$minWidth ? `${props.$marginLeft}px` : undefined)};
  margin-right: ${props => (props.$minWidth ? `${props.$marginRight}px` : undefined)};
  margin-top: ${props => (props.$minWidth ? `${props.$marginTop}px` : undefined)};
  margin-bottom: ${props => (props.$minWidth ? `${props.$marginBottom}px` : undefined)};
  padding: ${props => (props.$minWidth ? `${props.$padding}px` : undefined)};
  padding-left: ${props => (props.$minWidth ? `${props.$paddingLeft}px` : undefined)};
  padding-right: ${props => (props.$minWidth ? `${props.$paddingRight}px` : undefined)};
  padding-top: ${props => (props.$minWidth ? `${props.$paddingTop}px` : undefined)};
  padding-bottom: ${props => (props.$minWidth ? `${props.$paddingBottom}px` : undefined)};
  cursor: ${props => (props.$onClick ? 'pointer' : props.$cursor)};

  & > *:not(:last-child) {
    ${({ $childrenStyles }) => $childrenStyles};
  }
`;
