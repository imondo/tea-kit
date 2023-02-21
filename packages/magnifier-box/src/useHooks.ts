import { getStyle } from '@tea-kit/utils'
export default (el: HTMLElement)  => {
  console.log(el);
  const oImgWrap = el;
  const oMagWrap = oImgWrap.querySelector('.mag-wrap') as HTMLElement;
  const oMagImg = oMagWrap.querySelector('.mag-img') as HTMLElement;
  const imgWidth = getStyle(oImgWrap, 'width');
  const imgHeight = getStyle(oImgWrap, 'height');
  const magWidth = getStyle(oMagWrap, 'width');
  const magHeight = getStyle(oMagWrap, 'height');
  const imgX = oImgWrap.offsetLeft;
  const imgY = oImgWrap.offsetTop;

  const init = () => {
    bindEvent();
  };

  function bindEvent() {
    oImgWrap.addEventListener(
      'mouseover',
      function(e) {
        oMagWrap.className += ' show';
        const { x, y, mouseX, mouseY } = getXY(e);
        showMag(x, y, mouseX, mouseY);
        document.addEventListener('mousemove', handleMouseMove, false);
      },
      false
    );

    oImgWrap.addEventListener('mouseout', handleMouseOut, false);
  }

  function handleMouseMove(e) {
    const { x, y, mouseX, mouseY } = getXY(e);
    showMag(x, y, mouseX, mouseY);
  }

  function handleMouseOut() {
    oMagWrap.className = 'mag-wrap';
    document.removeEventListener('mousemove', handleMouseMove, false);
  }

  function showMag(x: number, y: number, mouseX: number, mouseY: number) {
    oMagWrap.style.left = x + 'px';
    oMagWrap.style.top = y + 'px';
    oMagImg.style.left = -x + 'px';
    oMagImg.style.top = -y + 'px';
    console.log(mouseX)
    if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
      oMagWrap.className = 'mag-wrap';
      document.removeEventListener('mousemove', handleMouseMove, false);
    }
  }

  function getXY(e: HTMLElement) {
    return {
      x: e.pageX - imgX - magWidth / 2,
      y: e.pageY - imgY - magHeight / 2,
      mouseX: e.pageX - imgX,
      mouseY: e.pageY - imgY
    };
  }

  init();
}