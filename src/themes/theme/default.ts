// project-imports
import { ThemeMode } from 'config';

// types
import { PaletteThemeProps } from 'types/theme';

// ==============================|| PRESET THEME - DEFAULT ||============================== //

export default function Default(mode: ThemeMode): PaletteThemeProps {
  const contrastText = '#fff';

  let primaryColors = ['#E9F0FF', '#C8D9FF', '#A3C0FF', '#7EA6FF', '#6293FF', '#4680FF', '#3F78FF', '#376DFF', '#2F63FF', '#2050FF'];
  let secondaryColors = ['#F8F9FA', '#F8F9FA', '#F3F5F7', '#DBE0E5', '#BEC8D0', '#8996A4', '#5B6B79', '#3E4853', '#1D2630', '#131920'];
  let errorColors = ['#f5bebe', '#e76767', '#dc2626', '#d31c1c', '#c50d0d'];
  let warningColors = ['#f7dcb3', '#edad4d', '#e58a00', '#de7700', '#d35a00'];
  let infoColors = ['#c5eff3', '#78d9e2', '#3ec9d6', '#30bccc', '#1ba9bc'];
  let successColors = ['#c0e5d9', '#6bc2a5', '#2ca87f', '#21976c', '#107d4f'];

  if (mode === ThemeMode.DARK) {
    primaryColors = ['#2050FF', '#2F63FF', '#376DFF', '#3F78FF', '#4680FF', '#6293FF', '#7EA6FF', '#A3C0FF', '#C8D9FF', '#E9F0FF'];
    secondaryColors = ['#131920', '#1D2630', '#3E4853', '#5B6B79', '#8996A4', '#BEC8D0', '#DBE0E5', '#F3F5F7', '#F8F9FA', '#F8F9FA'];
    errorColors = ['#c50d0d', '#d31c1c', '#dc2626', '#e76767', '#f5bebe'];
    warningColors = ['#d35a00', '#de7700', '#e58a00', '#edad4d', '#f7dcb3'];
    infoColors = ['#1ba9bc', '#30bccc', '#3ec9d6', '#78d9e2', '#c5eff3'];
    successColors = ['#107d4f', '#21976c', '#2ca87f', '#6bc2a5', '#c0e5d9'];
  }

  return {
    primary: {
      lighter: primaryColors[0] || '#E9F0FF',
      100: primaryColors[1] || '#C8D9FF',
      200: primaryColors[2] || '#A3C0FF',
      light: primaryColors[3] || '#7EA6FF',
      400: primaryColors[4] || '#6293FF',
      main: primaryColors[5] || '#4680FF',
      dark: primaryColors[6] || '#3F78FF',
      700: primaryColors[7] || '#376DFF',
      darker: primaryColors[8] || '#2F63FF',
      900: primaryColors[9] || '#2050FF',
      contrastText
    },
    secondary: {
      lighter: secondaryColors[0] || '#F8F9FA',
      100: secondaryColors[1] || '#F8F9FA',
      200: secondaryColors[2] || '#F3F5F7',
      light: secondaryColors[3] || '#DBE0E5',
      400: secondaryColors[4] || '#BEC8D0',
      500: secondaryColors[5] || '#8996A4',
      main: secondaryColors[6] || '#5B6B79',
      dark: secondaryColors[7] || '#3E4853',
      800: secondaryColors[8] || '#1D2630',
      darker: secondaryColors[9] || '#131920',
      contrastText
    },
    error: {
      lighter: errorColors[0] || '#f5bebe',
      light: errorColors[1] || '#e76767',
      main: errorColors[2] || '#dc2626',
      dark: errorColors[3] || '#d31c1c',
      darker: errorColors[4] || '#c50d0d',
      contrastText
    },
    warning: {
      lighter: warningColors[0] || '#f7dcb3',
      light: warningColors[1] || '#edad4d',
      main: warningColors[2] || '#e58a00',
      dark: warningColors[3] || '#de7700',
      darker: warningColors[4] || '#d35a00',
      contrastText
    },
    info: {
      lighter: infoColors[0] || '#c5eff3',
      light: infoColors[1] || '#78d9e2',
      main: infoColors[2] || '#3ec9d6',
      dark: infoColors[3] || '#30bccc',
      darker: infoColors[4] || '#1ba9bc',
      contrastText
    },
    success: {
      lighter: successColors[0] || '#c0e5d9',
      light: successColors[1] || '#6bc2a5',
      main: successColors[2] || '#2ca87f',
      dark: successColors[3] || '#21976c',
      darker: successColors[4] || '#107d4f',
      contrastText
    }
  };
}
