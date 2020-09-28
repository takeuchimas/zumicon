/**
 * atom を一元管理
 * 画面共有 
 */
import { atom } from 'recoil';

export const countState = atom({
  key: 'sample/count',
  default: 0
});

export const tanakaState = atom({
  key: 'tanakaState',
  default: '田中'
});