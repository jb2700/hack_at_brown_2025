import React, { useEffect, useState } from "react";
import Svg, { Image, G, Path } from "react-native-svg";
import { Dimensions } from "react-native";

const Body = ({ data = [], gender, side }) => {
  const [highlightData, setHighlightData] = useState([]);

  useEffect(() => {
    const updatedHighlightData = data.map(({ slug, intensity }) => ({
      slug,
      fill: `rgba(255, 0, 0, ${0.2 + 0.2 * intensity})`,
    }));
    setHighlightData(updatedHighlightData);
  }, [data]);

  const { width } = Dimensions.get("window");

  return (
    <Svg width={width} height={width} viewBox="0 0 100 100">
      <Image
        href={{ uri: `./assets/models/${gender}-${side}.svg` }}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      />
      <G>
        {highlightData.map(({ slug, fill }) => (
          <Path key={slug} id={slug} fill={fill} />
        ))}
      </G>
    </Svg>
  );
};

export default Body;