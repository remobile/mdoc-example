const React = require('react');
const mdoc = require('mdoc');
const Container = mdoc.Container;
const MarkdownBlock = mdoc.MarkdownBlock;
const GridBlock = mdoc.GridBlock;

const code =
`\`\`\`javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WhyReactNativeIsSoGreat extends Component {
    render() {
        return (
            <View>
                <Text>
                    If you like React on the web, you'll like React Native.
                </Text>
                <Text>
                    You just use native components like 'View' and 'Text',
                    instead of web components like 'div' and 'span'.
                </Text>
            </View>
        );
    }
}
\`\`\``;

const supportLinks = [
    {
        content:
        'Learn more using the [documentation on this site.](/simiantong/gongsi_fengcai1_md.html)',
        title: 'Browse Docs',
    },
    {
        content: 'Ask questions about the documentation and project',
        title: 'Join the community',
    },
    {
        content: "Find out what's new with this project",
        title: 'Stay up to date',
    },
];

class Help extends React.Component {
    render() {
        return (
            <Container>
                这是一个帮助页面
                <MarkdownBlock>
                    {code}
                </MarkdownBlock>
                <GridBlock contents={supportLinks} layout="threeColumn" />
            </Container>
        );
    }
}

module.exports = Help;
