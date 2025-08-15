// project-imports
import { ThemeMode } from 'config';

// types
import { PaletteThemeProps } from 'types/theme';

// ==============================|| PRESET THEME - THEME5 ||============================== //

export default function Theme5(mode: ThemeMode): PaletteThemeProps {
  const contrastText = '#fff';

  let primaryColors = ['#fff4e6', '#ffdfb8', '#ffc98f', '#ffb066', '#ff943d', '#f27013', '#cc5206', '#a63a00', '#802800', '#591900'];
  let secondaryColors = ['#F8F9FA', '#F8F9FA', '#F3F5F7', '#DBE0E5', '#BEC8D0', '#8996A4', '#5B6B79', '#3E4853', '#1D2630', '#131920'];
  let errorColors = ['#FDE8E7', '#F25E52', '#F04134', '#EE3B2F', '#E92A21'];
  let warningColors = ['#FFF7E0', '#FFC926', '#FFBF00', '#FFB900', '#FFA900'];
  let infoColors = ['#E0F4F5', '#26B0BA', '#00A2AE', '#009AA7', '#008694'];
  let successColors = ['#E0F5EA', '#26B56E', '#00A854', '#00A04D', '#008D3A'];

  if (mode === ThemeMode.DARK) {
    primaryColors = ['#32221a', '#4a2b18', '#5e371b', '#7d4319', '#a85317', '#d26415', '#e9883a', '#f4a962', '#f8c48c', '#fbdbb5'];
    secondaryColors = ['#131920', '#1D2630', '#3E4853', '#5B6B79', '#8996A4', '#BEC8D0', '#DBE0E5', '#F3F5F7', '#F8F9FA', '#F8F9FA'];
    errorColors = ['#321d1d', '#7d2e28', '#d13c31', '#e66859', '#f8baaf'];
    warningColors = ['#342c1a', '#836611', '#dda705', '#e9bf28', '#f8e577'];
    infoColors = ['#1a2628', '#11595f', '#058e98', '#1ea6aa', '#64cfcb'];
    successColors = ['#1a2721', '#115c36', '#05934c', '#1da65d', '#61ca8b'];
  }

  return {
    primary: {
      lighter: primaryColors[0] || '#FFF3E0',
      100: primaryColors[1] || '#FFE0B2',
      200: primaryColors[2] || '#FFCC80',
      light: primaryColors[3] || '#FFB74D',
      400: primaryColors[4] || '#FFA726',
      main: primaryColors[5] || '#FF9800',
      dark: primaryColors[6] || '#F57C00',
      700: primaryColors[7] || '#EF6C00',
      darker: primaryColors[8] || '#E65100',
      900: primaryColors[9] || '#FF6F00',
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
