'use strict';

module.exports = Franz => {
  function parseIntOrZero (val) {
    return isNaN(parseInt(val)) ? 0 : parseInt(val);
  };
  const getMessages = () => {
    const allMessages = parseIntOrZero(document.querySelector('.team-counter').textContent);
    console.log(allMessages);
    Franz.setBadge(allMessages);
  };
  Franz.loop(getMessages);
};