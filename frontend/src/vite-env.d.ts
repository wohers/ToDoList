/// <reference types="vite/client" />
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'dayjs' {
  function dayjs(date?: dayjs.ConfigType, format?: string | string[], strict?: boolean): dayjs.Dayjs;
  
  namespace dayjs {
    type ConfigType = string | number | Date | Dayjs | null | undefined;
    interface Dayjs {
      isSame(date: ConfigType, unit?: string): boolean;
      isAfter(date: ConfigType, unit?: string): boolean;
      isBefore(date: ConfigType, unit?: string): boolean;
      format(template?: string): string;
      [key: string]: any;
    }
    function locale(preset?: string | any, object?: any, isLocal?: boolean): string;
    function extend<T>(plugin: any, option?: T): Dayjs;
  }

  export = dayjs;
}

declare module 'dayjs/locale/ru' {
  const locale: any;
  export default locale;
}
