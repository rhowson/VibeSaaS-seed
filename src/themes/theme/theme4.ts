// project-imports
import { ThemeMode } from 'config';

// types
import { PaletteThemeProps } from 'types/theme';

// ==============================|| PRESET THEME - THEME4 ||============================== //

export default function Theme4(mode: ThemeMode): PaletteThemeProps {
  const contrastText = '#fff';

  let primaryColors = ['#f0f6ff', '#edf4ff', '#bed3f7', '#8faeeb', '#6488de', '#3c64d0', '#2947ab', '#192f85', '#0d1b5e', '#070e38'];
  let secondaryColors = ['#F8F9FA', '#F8F9FA', '#F3F5F7', '#DBE0E5', '#BEC8D0', '#8996A4', '#5B6B79', '#3E4853', '#1D2630', '#131920'];
  let errorColors = ['#FDE8E7', '#F25E52', '#F04134', '#EE3B2F', '#E92A21'];
  let warningColors = ['#FFF7E0', '#FFC926', '#FFBF00', '#FFB900', '#FFA900'];
  let infoColors = ['#E0F4F5', '#26B0BA', '#00A2AE', '#009AA7', '#008694'];
  let successColors = ['#E0F5EA', '#26B56E', '#00A854', '#00A04D', '#008D3A'];

  if (mode === ThemeMode.DARK) {
    primaryColors = ['#1d212d', '#212841', '#273353', '#2c3e6e', '#324c92', '#385ab5', '#5d7dcb', '#89a7e1', '#b9cef0', '#e9f0fb'];
    secondaryColors = ['#131920', '#1D2630', '#3E4853', '#5B6B79', '#8996A4', '#BEC8D0', '#DBE0E5', '#F3F5F7', '#F8F9FA', '#F8F9FA'];
    errorColors = ['#321d1d', '#7d2e28', '#d13c31', '#e66859', '#f8baaf'];
    warningColors = ['#342c1a', '#836611', '#dda705', '#e9bf28', '#f8e577'];
    infoColors = ['#1a2628', '#11595f', '#058e98', '#1ea6aa', '#64cfcb'];
    successColors = ['#1a2721', '#115c36', '#05934c', '#1da65d', '#61ca8b'];
  }

  return {
    primary: {
      lighter: primaryColors[0] || '#E8F5E8',
      100: primaryColors[1] || '#C8E6C9',
      200: primaryColors[2] || '#A5D6A7',
      light: primaryColors[3] || '#81C784',
      400: primaryColors[4] || '#66BB6A',
      main: primaryColors[5] || '#4CAF50',
      dark: primaryColors[6] || '#43A047',
      700: primaryColors[7] || '#388E3C',
      darker: primaryColors[8] || '#2E7D32',
      900: primaryColors[9] || '#1B5E20',
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
      lighter: errorColors[0] || '#FFE7D3',
      light: errorColors[1] || '#FF805D',
      main: errorColors[2] || '#FF4528',
      dark: errorColors[3] || '#DB271D',
      darker: errorColors[4] || '#930C1A',
      contrastText
    },
    warning: {
      lighter: warningColors[0] || '#FFF6D0',
      light: warningColors[1] || '#FFCF4E',
      main: warningColors[2] || '#FFB814',
      dark: warningColors[3] || '#DB970E',
      darker: warningColors[4] || '#935B06',
      contrastText
    },
    info: {
      lighter: infoColors[0] || '#DCF0FF',
      light: infoColors[1] || '#7EB9FF',
      main: infoColors[2] || '#549BFF',
      dark: infoColors[3] || '#3D78DB',
      darker: infoColors[4] || '#1A3D93',
      contrastText
    },
    success: {
      lighter: successColors[0] || '#EAFCD4',
      light: successColors[1] || '#8AE65B',
      main: successColors[2] || '#58D62A',
      dark: successColors[3] || '#3DB81E',
      darker: successColors[4] || '#137C0D',
      contrastText
    }
  };
}
