import palette from '../../assets/colors';

export const themeSwitchControl = () => ({
  display: 'flex',
  alignItems: 'center',
  flexShrink: '0',
  position: 'relative',
  width: '64px',
  height: '32px',
  borderRadius: '50em',
  padding: '3px 0',
  '@media (max-width: 767px)': { marginLeft: 'auto' },
});

export const themeSwitchTrack = () => ({
  position: 'absolute',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  color: 'transparent',
  userSelect: 'none',
  backgroundColor: palette.light.themeSwitch,
  borderRadius: 'inherit',
  zIndex: '1',
  cursor: 'pointer',
  '[data-check="true"]': {
    backgroundColor: palette.dark.themeSwitch,
  },
});

export const themeSwitchToggle = () => ({
  position: 'absolute',
  left: 0,
  top: 0,
  margin: 0,
  padding: 0,
  opacity: 0,
  height: 0,
  width: 0,
});

export const themeSwitchMarker = () => ({
  position: 'absolute',
  backgroundColor: '#fff',
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  zIndex: '2',
  pointerEvents: 'none',
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.25)',
  transform: 'translateX(3px)',
  transition: 'transform 250ms linear',
  '[data-check="true"]': {
    transform: 'translateX(35px)',
  },
});
