/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type fourmodulePage = typeof import('./pages/fourmodule.page.js');
type boardgamePage = typeof import('./pages/boardgame.page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, fourmodulePage: fourmodulePage, boardgamePage: boardgamePage }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
