'use strict';

const React= require('react');
const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;
const { markdownContainer, MarkdownBlock } = require('mdoc');

function spoiler_plugin(md) {
    md.use(markdownContainer, 'flow', {
        validate: function(params) {
            return params.trim().match(/^flow\s+(.*)$/);
        },
        render: function (tokens, idx) {
            var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
                // opening tag
                return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
            } else {
                // closing tag
                return '</details>\n';
            }
        },
        content: function (tokens, idx) {
            return renderToStaticMarkup(
                <MarkdownBlock>
                    {tokens[idx].markup}
                </MarkdownBlock>
            )
        },
    });
}

module.exports = [spoiler_plugin];
