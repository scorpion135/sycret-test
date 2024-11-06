import React from "react"
import ContentLoader from "react-content-loader"

import styles from "./Certificate.module.scss"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={560}
    height={532}
    viewBox="0 0 560 530"
    backgroundColor="#ababab"
    foregroundColor="#ecebeb"
    className={styles.skeleton}
    {...props}
  >
    <rect x="0" y="8" rx="10" ry="10" width="400" height="532"  />

  </ContentLoader>
)

export default Skeleton;