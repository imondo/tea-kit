import { getStyle } from '@tea-kit/utils'
export default (el: Element) => {
  const oImgWrap = el;
  const oMagWrap = oImgWrap.querySelector('.tea-mag-wrap') as HTMLEmbedElement;
  const oMagImg = oMagWrap.querySelector('.tea-mag-img') as HTMLEmbedElement;
  const imgWidth = getStyle(oImgWrap, 'width') as number;
  const imgHeight = getStyle(oImgWrap, 'height') as number;
  const magWidth = getStyle(oMagWrap, 'width') as number;
  const magHeight = getStyle(oMagWrap, 'height') as number;

  const init = () => {
    bindEvent();
  };

  function bindEvent() {
    oImgWrap.addEventListener(
      'mouseover',
      (e: Event) => {
        oMagWrap.className += ' tea-mag-wrap__show';
        const { x, y, mouseX, mouseY } = getXY(e);
        showMag(x, y, mouseX, mouseY);
        document.addEventListener('mousemove', handleMouseMove, false);
      },
      false
    );

    oImgWrap.addEventListener('mouseout', handleMouseOut, false);
  }

  function handleMouseMove(e: MouseEvent) {
    const { x, y, mouseX, mouseY } = getXY(e);
    showMag(x, y, mouseX, mouseY);
  }

  function handleMouseOut() {
    oMagWrap.className = 'tea-mag-wrap';
    document.removeEventListener('mousemove', handleMouseMove, false);
  }

  function showMag(x: number, y: number, mouseX: number, mouseY: number) {
    oMagWrap.style.left = x + 'px';
    oMagWrap.style.top = y + 'px';
    oMagImg.style.left = -x + 'px';
    oMagImg.style.top = -y + 'px';
    if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
      oMagWrap.className = 'tea-mag-wrap';
      document.removeEventListener('mousemove', handleMouseMove, false);
    }
  }

  function getXY(e: Event) {
    const { pageX, pageY } = e as MouseEvent;
    const { left, top } = oImgWrap.getBoundingClientRect();
    const x = pageX - left - (magWidth / 2);
    const y = pageY - top - (magHeight / 2);

    const mouseX = pageX - left;
    const mouseY = pageY - top;

    return {
      x,
      y,
      mouseX,
      mouseY
    };
  }

  init();
}