import React from 'react';
import Post from './Post';


const deskUpload = () => {
  return (
    <form>
      <input type="file"/>
    </form>
  )
}

function PremiereVis() {
  return (
    <div className="PremiereVis">
      <Post />
    </div>
  );
}

export default PremiereVis;