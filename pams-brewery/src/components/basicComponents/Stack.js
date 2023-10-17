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
  width = 'auto', // Only string, so use 'px' as suffice when needed
  height = 'auto', // Only string, so use 'px' as suffice when needed
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  cursor,
  maxWidth, // Only string, so use 'px' as suffice when needed
  maxHeight, // Only string, so use 'px' as suffice when needed
  minWidth, // Only string, so use 'px' as suffice when needed
  minHeight, // Only string, so use 'px' as suffice when needed
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
  flexWrap,
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
      $flexWrap={flexWrap}
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
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse', 'inherit']),
};

const Wrap = styled.div`
  display: flex;
  flex: ${props => props.$flex};
  flex-wrap: ${props => props.$flexWrap};
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
  margin: ${props => (props.$margin ? `${props.$margin}px` : undefined)};
  margin-left: ${props => (props.$marginLeft ? `${props.$marginLeft}px` : undefined)};
  margin-right: ${props => (props.$marginRight ? `${props.$marginRight}px` : undefined)};
  margin-top: ${props => (props.$marginTop ? `${props.$marginTop}px` : undefined)};
  margin-bottom: ${props => (props.$marginBottom ? `${props.$marginBottom}px` : undefined)};
  padding: ${props => (props.$padding ? `${props.$padding}px` : undefined)};
  padding-left: ${props => (props.$paddingLeft ? `${props.$paddingLeft}px` : undefined)};
  padding-right: ${props => (props.$paddingRight ? `${props.$paddingRight}px` : undefined)};
  padding-top: ${props => (props.$paddingTop ? `${props.$paddingTop}px` : undefined)};
  padding-bottom: ${props => (props.$paddingBottom ? `${props.$paddingBottom}px` : undefined)};
  cursor: ${props => (props.$onClick ? 'pointer' : props.$cursor)};

  & > *:not(:last-child) {
    ${({ $childrenStyles }) => $childrenStyles};
  }
`;
