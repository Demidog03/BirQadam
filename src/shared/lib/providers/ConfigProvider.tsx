import { FC, ReactNode } from 'react';
import { ColorPickerProps, GetProp, ConfigProvider as AntConfigProvider } from 'antd';
import { COLORS } from '@/shared/lib/constants.ts';

export type Color = Exclude<GetProp<ColorPickerProps, 'value'>, string>;

interface ThemeData {
  borderRadius: number
  colorPrimary: string
  Button?: {
    colorPrimary: string
    linkPrimary: string
    algorithm?: boolean
  }
  Input?: {
    activeShadow?: string
  }
}

const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: COLORS.PRIMARY[5],
  Button: {
    colorPrimary: COLORS.PRIMARY[5],
    linkPrimary: COLORS.PRIMARY[4]
  },
  Input: {
    activeShadow: `0 0 0 2px ${COLORS.LIGHT[4]}`
  }
};

const ConfigProvider: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <AntConfigProvider
      theme={{
        token: {
          colorPrimary: defaultData.colorPrimary,
          borderRadius: defaultData.borderRadius,
        },
        components: {
          Button: {
            colorPrimary: defaultData.Button?.colorPrimary,
            algorithm: defaultData.Button?.algorithm,
            colorLink: defaultData.Button?.linkPrimary,
          },
          Input: {
            activeShadow: defaultData.Input?.activeShadow
          }
        },
      }}
    >
      { children }
    </AntConfigProvider>
  );
};

export default ConfigProvider;