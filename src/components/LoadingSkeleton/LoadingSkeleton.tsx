import React from 'react'
import ContentLoader, { Rect } from "react-content-loader/native";

interface LoadingSkeletonProps {
  id: number,
  width: number,
  height: number
}

const LoadingSkeleton = ({ width, height }: LoadingSkeletonProps) => (
  <ContentLoader 
    viewBox={`0 0 ${width} ${height}`} 
    backgroundColor='#b9b9b9'
    speed={1}
    style={{
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      height: 64
    }}
  >
    <Rect x="20" y="0" rx="4" ry="4" width={`${width - 36}`} height={height} />
  </ContentLoader>
)

export default LoadingSkeleton