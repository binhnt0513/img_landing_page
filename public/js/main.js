window.onload = function() {
  var menuButton = document.getElementById('js-header-menu');
  var globalNavigation = document.getElementById('global-nav');

  var menuButtonFn = function menuButtonFn() {
    var toggleMenu = function toggleMenu(el) {
      el = el.currentTarget;
      if (el.getAttribute('aria-expanded') === 'false') {
        el.setAttribute('aria-expanded', 'true');
        el.setAttribute('aria-label', 'メニューを閉じる');
        globalNavigation.setAttribute('aria-hidden', 'false');
      } else {
        el.setAttribute('aria-expanded', 'false');
        el.setAttribute('aria-label', 'メニューを開く');
        globalNavigation.setAttribute('aria-hidden', 'true');
      }
    };
    menuButton.addEventListener('click', toggleMenu);
    var mediaQuery = window.matchMedia("(min-width: ".concat(769 / 16, "em)"));
    var handleTabletChange = function handleTabletChange(mq) {
      if (mq.matches) {
        menuButton.setAttribute('aria-expanded', 'true');
        menuButton.setAttribute('aria-label', 'メニューを閉じる');
        globalNavigation.setAttribute('aria-hidden', 'false');
      } else {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'メニューを開く');
        globalNavigation.setAttribute('aria-hidden', 'true');
      }
    };
    mediaQuery.addEventListener('change', handleTabletChange);
    handleTabletChange(mediaQuery);
  };

  menuButtonFn();
}