import { css } from 'styled-components';

export const ellipsisStyle = (line = 1) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
`;

export const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return `rgb(${r}, ${g}, ${b})`;
};
