import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton2 = () => (
    <ContentLoader
        speed={2}
        width={150}
        height={100}
        viewBox="0 0 190 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >
        <rect x="27" y="23" rx="9" ry="9" width="157" height="16" />
        <rect x="39" y="48" rx="9" ry="9" width="142" height="13" />
        <rect x="113" y="78" rx="3" ry="3" width="65" height="11" />
        <rect x="51" y="100" rx="9" ry="9" width="129" height="16" />
    </ContentLoader>
)

export default Skeleton2