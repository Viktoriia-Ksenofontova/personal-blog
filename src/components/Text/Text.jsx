import React, {useContext} from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import ThemeContext from "../../context/ThemeContext";
import textStyles from "./Text.style";

export default function Text({ as, styles, variant, children }) {
  const { css } = useFela();
  const { theme } = useContext(ThemeContext);
  const Component = as;
  const allStyles = textStyles(styles, variant, theme);

  return (
    <Component className={css(allStyles)}>
      {children}
    </Component>
  )
}

Text.defaultProps = {
  styles: {},
  variant: "primary"
};

Text.propTypes = {
  as: PropTypes.node.isRequired,
  styles: PropTypes.objectOf(PropTypes.string),
  variant:PropTypes.string,
  children: PropTypes.node.isRequired,
};