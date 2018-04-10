'use strict';

const React= require('react');
const { markdownContainer, MarkdownBlock } = require('mdoc');

function resume_plugin(md) {
    md.use(markdownContainer, 'resume', {
        validate: function(params) {
            return params.trim().match(/^resume\s+(.*)$/);
        },
        render: function (tokens, idx) {
            var m = tokens[idx].info.trim().match(/^resume\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
                return `<dt><h5>${md.utils.escapeHtml(m[1])}</h5></dt><dd>`;
            } else {
                return `</dd>`;
            }
        },
    });
}

module.exports = resume_plugin;
