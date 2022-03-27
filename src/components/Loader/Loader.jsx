import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={160}
      height={260}
      viewBox="0 0 160 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="512" y="686" rx="3" ry="3" width="88" height="6" />
      <rect x="512" y="704" rx="3" ry="3" width="52" height="6" />
      <rect x="487" y="692" rx="3" ry="3" width="410" height="6" />
      <rect x="492" y="692" rx="3" ry="3" width="380" height="6" />
      <rect x="453" y="693" rx="3" ry="3" width="178" height="6" />
      <circle cx="567" cy="683" r="20" />
      <rect x="537" y="675" rx="0" ry="0" width="203" height="18" />
      <rect x="534" y="661" rx="0" ry="0" width="73" height="37" />
      <rect x="538" y="667" rx="0" ry="0" width="85" height="46" />
      <rect x="0" y="110" rx="4" ry="4" width="150" height="15" />
      <rect x="0" y="170" rx="8" ry="8" width="80" height="24" />
      <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
      <rect x="0" y="136" rx="4" ry="4" width="90" height="15" />
      <rect x="115" y="165" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
  );
};

export default Loader;
