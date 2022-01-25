declare module '*.svg' {
  const src: string;
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default src;
}
