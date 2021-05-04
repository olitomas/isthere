export default isItThere = (elm) => {
  //Viewport posistion
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  //Element posistion
  const elmBottomFromViewportTop = elm.getBoundingClientRect().bottom;
  const elmTopFromViewportTop = elm.getBoundingClientRect().top;

  const bottomVisible =
    elmBottomFromViewportTop < vh && elmBottomFromViewportTop > 0;
  const topVisible = elmTopFromViewportTop > 0;

  const calculatePercentVisible = () => {
    let hiddenPixels = [];

    /* If the element top is above the viewport top (hidden above) */
    if (elmTopFromViewportTop < 0)
      hiddenPixels.push(
        Math.min(Math.abs(elmTopFromViewportTop), elm.offsetHeight)
      );

    /* If the element bottom is hidden below the viewport bottom */
    if (elmBottomFromViewportTop > vh) {
      const elmBottomPxFromViewportBottom = Math.abs(
        elmBottomFromViewportTop - vh
      );
      hiddenPixels.push(
        Math.min(elmBottomPxFromViewportBottom, elm.offsetHeight)
      );
    }

    const totalHiddenPx = hiddenPixels.reduce((prev, curr) => {
      return (prev || 0) + (curr || 0);
    }, 0);

    if (totalHiddenPx === 0) {
      return 1;
    } else if (totalHiddenPx === elm.offsetHeight) {
      return 0;
    } else {
      return (elm.offsetHeight - totalHiddenPx) / elm.offsetHeight;
    }
  };

  return {
    bottomVisible,
    topVisible,
    percentVisible: calculatePercentVisible(),
  };
};
