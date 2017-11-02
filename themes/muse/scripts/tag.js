'use strict';

hexo.extend.tag.register('note', function(args, content) {
	var className = args.shift();
	var header = '';
	var result = '';

	if(args.length) {
		header = '<strong class="note-title">' + args.join(' ') + '</strong>';
	}

	result += '<blockquote class="note ' + className + '">' + header;
	result += hexo.render.renderSync({text: content, engine: 'markdown'});
	result += '</blockquote>';

	return result;
}, true);

hexo.extend.tag.register('demo', function(args, content) {
	var result = '';

	result += '<div class="demo">';
	result += '<button class="demo-button"><i class="icon icon-arrow-down"></i><span>显示代码</span></button>';
	result += '<div class="demo-content">';
	result += hexo.render.renderSync({text: content, engine: 'markdown'});
	result += '</div>';
	result += '</div>';

	return result;
}, true);

hexo.extend.tag.register('script', function(args, content) {
	var result = '';
	result += '<script type="text/javascript">';
	result += content;
	result += '</script>'

	return result;
}, true);
