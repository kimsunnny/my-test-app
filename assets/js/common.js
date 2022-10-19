const commonFn = () => {
  const setInnerHeight = () => {
    let windowWidth = document.getElementById("app").offsetWidth;
    let windowHeight = document.getElementById("app").offsetHeight;
    let windowRatio = windowWidth / windowHeight;
    console.log(windowWidth);
    if (windowWidth < 1280 || windowHeight < 800) {
      // 갤럭시 A8보다 작을 때
      if (windowRatio <= 1.6) {
        // 세로가 길 때
        let resizedHeight = windowWidth / 1.6;
        document.querySelector(".wrap").style.width = "100%";
        document.querySelector(".wrap").style.height = `${resizedHeight}px`;
      } else {
        // 가로가 길 때
        let resizedWidth = windowHeight * 1.6;
        document.querySelector(".wrap").style.height = "100%";
        document.querySelector(".wrap").style.width = `${resizedWidth}px`;
      }
    } else {
      document.querySelector(".wrap").style.width = "1280px";
      document.querySelector(".wrap").style.height = "800px";
    }
  };
  setInnerHeight();
  window.addEventListener("resize", () => {
    setInnerHeight();
  });
};
export { commonFn };
