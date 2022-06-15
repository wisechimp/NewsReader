import React from 'react'
import ContentLoader, { Rect } from "react-content-loader/native";

interface LoadingSkeletonProps {
  width: number,
  height: number
}

const LoadingSkeleton = ({ width, height }: LoadingSkeletonProps) => (
  <ContentLoader viewBox={`0 0 ${width} ${height}`}>
    <Rect x="20" y="17" rx="4" ry="4" width={`${width - 36}`} height={height} />
  </ContentLoader>
)

export default LoadingSkeleton