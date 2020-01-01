class Loader {
  static get inputProperties() {
    return ['--dotOneHeight', '--dotTwoHeight', '--dotThreeHeight'];
  }

  paint(ctx, size, props) {

    const height = [
      parseInt(props.get('--dotOneHeight').toString(), 10),
      parseInt(props.get('--dotTwoHeight').toString(), 10),
      parseInt(props.get('--dotThreeHeight').toString(), 10),
    ];

    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.fillStyle = '#ffeb3b';
      ctx.arc(size.width - 30 + (i * 15) - 10, (size.height - 10) * height[i]/100, 4, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}

registerPaint('loaderPoints', Loader);