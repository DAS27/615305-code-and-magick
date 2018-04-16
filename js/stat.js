'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 20;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y - GAP, '#fff');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', CLOUD_X + GAP, TEXT_WIDTH + GAP + FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP, GAP, 480, CLOUD_Y);

  ctx.fillStyle = '#blue';
  ctx.fillText('Кекс', CLOUD_X + GAP, TEXT_WIDTH + GAP + FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 1, barWidth, BAR_HEIGHT);

  ctx.fillStyle = '#gray';
  ctx.fillText('Катя', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 1);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 1, barWidth, BAR_HEIGHT);

  ctx.fillStyle = '#gray';
  ctx.fillText('Игорь', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 2);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 2, barWidth, BAR_HEIGHT);
};
