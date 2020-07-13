import React from "react";
import PageLoading from './style';

const Loading = () => {

  return (
    <>
      <PageLoading>
        <div class='mask' id='top'>
          <div class='plane'></div>
        </div>
        <div class='mask' id='middle-top'>
          <div class='plane'></div>
        </div>
        <div class='mask' id='middle-down'>
          <div class='plane'></div>
        </div>
        <div class='mask' id='bottom'>
          <div class='plane'></div>
        </div>
      </PageLoading>
    </>
  );
};

export default Loading;