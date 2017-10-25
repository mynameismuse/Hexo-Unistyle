/* global hexo */

'use strict';

var pathFn = require('path');
var _ = require('lodash');
var cheerio = require('cheerio');
var lunr = require('lunr');

hexo.extend.helper.register('header_menu', function(params) {
	var menu = this.site.data.menu;
	var result = '';
	var self = this;

	_.each(menu, function(path, title) {
		result += '<li class="nav-item"><a href="' + self.url_for(path) + '">' + title + '</a></li>';
	})

	return result;
});

hexo.extend.helper.register('doc_sidebar', function(params) {
	var type = this.page.canonical_path.split('/')[0];
	var sidebar = this.site.data.sidebar[type];
	var path = pathFn.basename(this.path);
	var result = '';
	var self = this;

	_.each(sidebar, function (menu, title) {
		result += '<strong class="sidebar-title">' + self._(title) + '</strong>';

		_.each(menu, function (link, text) {
			var itemClass = 'sidebar-link'
			if (link === path) itemClass += ' current';

			result += '<a class="' + itemClass + '"" href="' + link + '">' + self._(text) + '</a>'
		})
	})

	return result;
})

hexo.extend.helper.register('mobile_header_menu', function(params) {
	var menu = this.site.data.menu;
	var result = '';
	var self = this;

	result += '<div class="ui sidebar inverted vertical menu">';

	_.each(menu, function(path, title) {
		result += '<a class="item" ' + 'href="' + self.url_for(path) + '">' + title + '</a>';
	})

	result += '</div>';

	return result;
})

hexo.extend.helper.register('mobile_sidebar_menu', function(params) {
	var menu = this.site.data.menu;
	var result = '';
	var self = this;

	result += '<div class="ui sidebar inverted vertical menu">';

	result += '<a class="item-title">菜单</a>';

	_.each(menu, function(path, title) {
		result += '<a class="item" ' + 'href="' + self.url_for(path) + '">' + title + '</a>';
	})

	var type = this.page.canonical_path.split('/')[0];
	var sidebar = this.site.data.sidebar[type];
	var path = pathFn.basename(this.path);

	result += '<br>';
	result += '<a class="item-title">子菜单</a>';

	_.each(sidebar, function (menu, title) {
		_.each(menu, function (link, text) {
			result += '<a class="item" ' + 'href="' + link + '">' + self._(text) + '</a>';
		})
	})

	result += '</div>';

	return result;

})


