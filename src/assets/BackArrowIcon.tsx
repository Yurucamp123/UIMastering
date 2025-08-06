import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BackArrowIcon = (props: SvgProps) => (
  <Svg width={6} height={10} viewBox="0 0 6 10" fill="none" {...props}>
    <Path
      d="M4.77772 8.2L1.22217 4.64445L4.77772 1.08889"
      stroke="#181C2E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BackArrowIcon;
