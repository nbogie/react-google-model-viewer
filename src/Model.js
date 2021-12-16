import "@google/model-viewer";
import React from "react";

function ModelToCache() {
  console.log("Model (re-)rendering - we want this to happen only once!");
  return (
    <div id="card">
      <model-viewer
        src="/submarinescene.glb"
        ios-src=""
        poster="http://placekitten.com/400/300?image=1"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      ></model-viewer>
    </div>
  );
}

//Model should return a cached version of ModelToCache, prevent it being re-rendered every time parent re-renders
const Model = React.memo(ModelToCache);
export default Model;
