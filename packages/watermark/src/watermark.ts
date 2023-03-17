'use strict'

export interface ISettings {
  text: string;
  elId?: string;
  rotate: number;
  fontSize: number;
  opacity: string;
  zIndex: string;
  color: string;
  offsetY: number;
  offsetX: number;
  fullscreen: boolean;
  el?: HTMLElement | null
}

const setWatermark = ({ text, rotate = -45, fontSize = 14, opacity = '0.4', zIndex = '9999', color = '#d7d7d7', offsetY = 110, offsetX = 80, elId, fullscreen = false, el }: ISettings) => {
  const body = document.body;
  let canvasParent = el || body;
  if (!fullscreen) {
    canvasParent.style.position = 'relative';
    canvasParent.style.overflow = 'hidden';
  }
  if (document.getElementById('watermark__')) {
    (document.getElementById('watermark__') as HTMLElement).remove()
  }
  const canvas = document.createElement('canvas') as HTMLCanvasElement;
  canvas.id = 'watermark__';
  canvas.className = 'watermark__';
  // 画布大小需要为容器的对角线长度,
  // 画布在旋转时不会出现对角空白无水印！！！
  let maxSizeContainer = Math.max(canvasParent.offsetWidth, canvasParent.offsetHeight);

  if (fullscreen) {
    maxSizeContainer = Math.max(body.offsetWidth, body.offsetHeight);
  }
  const minSizeCanvas = Math.ceil(Math.SQRT2 * maxSizeContainer);

  // 设置画面的最小尺寸
  canvas.setAttribute('width', String(minSizeCanvas));
  canvas.setAttribute('height', String(minSizeCanvas));

  // 修改画布在容器中的偏移，使其中心位置与容器的中心位置永远保持一致
  // 在旋转角度时也要以其中心点为中心进行旋转
  if (!el) {
    canvas.style.position = 'fixed';
  } else {
    canvas.style.position = 'absolute';
  }
  canvas.style.top = -Math.ceil((minSizeCanvas - maxSizeContainer) / 2) + 'px';
  canvas.style.left = -Math.ceil((minSizeCanvas - maxSizeContainer) / 2) + 'px';
  canvas.style.opacity = opacity;
  canvas.style.zIndex = zIndex;
  canvas.style.pointerEvents = 'none';
  canvas.style.userSelect = 'none';

  // 画笔
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  // 设置笔触样式，font的样式一定要在measureText方法调用前
  ctx.font = `${fontSize}px 微软雅黑`;
  ctx.fillStyle = color;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';

  // 计算字符串的横向与纵向间距，设置了font的大小与字体
  const offsetX_ = Math.ceil(ctx.measureText(text).width) + offsetX;

  // 列/行数
  const rowCount = Math.ceil(minSizeCanvas / offsetY);
  const colCount = Math.ceil(minSizeCanvas / offsetX_);

  // 旋转
  ctx.translate(minSizeCanvas / 2, minSizeCanvas / 2);
  ctx.rotate(rotate * Math.PI / 180);
  ctx.translate(-minSizeCanvas / 2, -minSizeCanvas / 2);

  // 行
  for (let i = 0; i < rowCount; i++) {
    // 列
    for (let j = 0; j < colCount; j++) {
      ctx.fillText(text, offsetX_ * j, offsetY * i);
    }
  }
  canvasParent.appendChild(canvas);
  return canvas.id;
}

export default {
  // 该方法只允许调用一次
  set(settings: ISettings) {
    let id = setWatermark(settings)
    setInterval(() => {
      if (document.getElementById(id) === null) {
        id = setWatermark(settings)
      }
    }, 500);
    // 监听页面大小的变化
    window.onresize = () => {
      setWatermark(settings)
    }
  }
}