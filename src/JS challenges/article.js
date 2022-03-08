/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable semi */
/* eslint-disable quotes */
const share_badge = document.querySelector(".content-footer");

let open = false;

function share() {
  open = !open;
  if (open) {
    share_badge.classList.remove("off");
    share_badge.classList.add("on");
  } else {
    share_badge.classList.add("off");
    share_badge.classList.remove("on");
  }
}
