import viewFormEvent from "./formEvent";
import viewCardsEvent from "./cardsEvent";

function Layout() {
  return `
  <div class="containerLayout">
<div class="layout container">
            <div class="icon-square" id="icon1"><i class="ri-home-4-fill"></i></div>
            <div class="icon-square" id="icon2"><i class="ri-calendar-event-fill"></i></div>
            <div class="icon-square" id="icon3"><i class="ri-user-2-fill"></i></div>
            <div id="session-data"></div>
        </div>
        </div>
        <div id="dynamicContent">
            ${viewFormEvent()}
            ${viewCardsEvent()}
        </div>
  `;
}

export default Layout;
