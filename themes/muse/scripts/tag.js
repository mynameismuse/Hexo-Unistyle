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
	result += '<button class="demo-button">显示代码</button>';
	result += '<div class="demo-content">';
	result += hexo.render.renderSync({text: content, engine: 'markdown'});
	result += '</div>';
	result += '</div>';

	return result;
}, true);