import React, { Suspense, useState } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));
export const Home = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      {loading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <h1 style={{ color: "white", fontFamily: "Helvetica" }}>
            Loading our 3D Home...
          </h1>
        </div>
      )}
      <Spline
        onLoad={() => {
          setLoading(false);
        }}
        scene="https://prod.spline.design/mETR6JtWcksI8BRx/scene.splinecode"
      />
    </Suspense>
  );
};
