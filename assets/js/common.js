const commonFn = () => {
  const setInnerHeight = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    if (windowWidth < 1280 || windowHeight < 800) {
      // 갤럭시 A8보다 작을 때
      if (windowRatio <= 1.6) {
        // 세로가 길 때
        let resizedHeight = windowWidth / 1.6;
        document.querySelector(".inner").style.width = "100%";
        document.querySelector(".inner").style.height = `${resizedHeight}px`;
      } else {
        // 가로가 길 때
        let resizedWidth = windowHeight * 1.6;
        document.querySelector(".inner").style.height = "100%";
        document.querySelector(".inner").style.width = `${resizedWidth}px`;
      }
    } else {
      document.querySelector(".inner").style.width = "1280px";
      document.querySelector(".inner").style.height = "800px";
    }
  };
  setInnerHeight();
  window.addEventListener("resize", () => {
    setInnerHeight();
  });
};
export { commonFn };
