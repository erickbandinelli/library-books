import styled from 'styled-components';

const PageLoading = styled.div`
  width: 70px;
  position: absolute;
  height: 75px;
  top: 50%;
  left: 50%;
  margin-top: -37.5px;
  margin-left: -35px;
  
  .mask {
    position: absolute;
    border-radius: 2px;
    overflow: hidden;
    perspective: 1000;
    backface-visibility: hidden;
  }

  .plane {
    background: #1D1F20;
    width: 400%;
    height: 100%;
    position: absolute;
    transform: translate3d(0px, 0, 0);
    z-index: 100;
    perspective: 1000;
    backface-visibility: hidden;
  }

  #top {
    width: 53px;
    height: 20px;
    left: 12px;
    transform: skew(-15deg, 0);
    z-index: 100;

    .plane {
      z-index: 2000;
      animation: strip-top 1.3s ease-in infinite 0s backwards;
    }
  }

  #middle-top {
    width: 33px;
    height: 20px;
    top: 15px;
    left: 12px;
    transform: skew(-15deg, 40deg);

    .plane {
      transform: translate3d(0px, 0, 0);
      background: #292c2d;
      animation: strip-middle-top 1.3s linear infinite 0.3s  backwards;
    }
  }

  #middle-down {
    width: 43px;
    height: 19px;
    top: 43px;
    left: 2px;
    transform: skew(-12deg, -32deg);

    .plane {
      transform: translate3d(0px, 0, 0);
      background: #35393b;
      animation: strip-middle-bottom 1.3s linear infinite 0.7s  backwards;
    }
  }

  #bottom {
    width: 53px;
    height: 20px;
    top: 55.5px;
    left: 2px;
    transform: skew(-15deg, 0);

    .plane {
      z-index: 2000;
      animation: strip-bottom 1.3s ease-out infinite 0.95s backwards;
    }
  }
}

@keyframes strip-top {
  from {
    transform: translate3d(53px, 0, 0);
  }

  to {
    transform: translate3d(-250px, 0, 0);
  }
}


@keyframes strip-middle-top {
  from {
    transform: translate3d(-160px, 0, 0);
  }

  to {
    transform: translate3d(53px, 0, 0);
  }
}


@keyframes strip-middle-bottom {
  from {
    transform: translate3d(53px, 0, 0);
  }

  to {
    transform: translate3d(-220px, 0, 0);
  }
}


@keyframes strip-bottom {
  from {
    transform: translate3d(-220px, 0, 0);
  }

  to {
    transform: translate3d(53px, 0, 0);
  }
}
`;

export default PageLoading;