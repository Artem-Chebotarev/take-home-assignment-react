/**
 * Global directive of types
 */
declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
  }
  
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import { ReactElement, SVGProps } from 'react';
  
    const SVG: (props: SVGProps<SVGElement>) => ReactElement;
    export default SVG;
}
  