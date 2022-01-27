import palette from '../../assets/colors';

const themeIcon = {
  iconSize: {
    large: 44,
    small: 20,
    default: 30,
  },
  color: {
    primary: palette.icon.primary,
    accent: palette.icon.accent,
  },
};

const getIconSize = (size: 'large' | 'small' | undefined) => {
  switch (size) {
    case 'large':
      return themeIcon.iconSize.large;

    case 'small':
      return themeIcon.iconSize.small;

    default:
      return themeIcon.iconSize.default;
  }
};

const getIconColor = (colorName: 'primary' | 'accent' | undefined) => {
  switch (colorName) {
    case 'primary':
      return themeIcon.color.primary;

    case 'accent':
      return themeIcon.color.accent;

    default:
      return themeIcon.color.primary;
  }
};

export default function style(
  size: 'large' | 'small' | undefined,
  iconColor: 'primary' | 'accent' | undefined,
  iconStyles: BaseObject | undefined,
) {
  let height;
  let width;
  let fill;

  if (iconStyles?.fill) {
    fill = iconStyles.fill;
  } else {
    fill = getIconColor(iconColor);
  }

  if (iconStyles?.height) {
    height = iconStyles.height;
  } else if (iconStyles?.width) {
    width = iconStyles.width;
  } else {
    height = getIconSize(size);
    width = getIconSize(size);
  }
  return { height, width, fill };
}
