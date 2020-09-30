
require("@rails/ujs").start()
require("turbolinks").start()
require("alpinejs")
require("@rails/activestorage").start()
require("timeago.js")

import { createPopper } from '@popperjs/core';
import { format, render, cancel, register } from 'timeago.js';
import Tagify from '@yaireo/tagify';

import TubrolinksPrefetch from 'turbolinks-prefetch'
TubrolinksPrefetch.start()

import I18n from "./i18n"
window.I18n = I18n


document.addEventListener("turbolinks:load", function () {
  const timeagos = document.querySelectorAll('.timeago');
  const lang = I18n.locale == 'cn' ? 'zh_CN' : 'en_US'
  if (timeagos.length > 0) {
    render(timeagos, lang);
  }
});

window.onpopstate = function (event) {
  document.location.reload();
};
