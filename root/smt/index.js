const React = require('react');
const mdoc = require('mdoc');
const MarkdownBlock = mdoc.MarkdownBlock; /* Used to read markdown */
const Container = mdoc.Container;
const GridBlock = mdoc.GridBlock;
const config = require(process.cwd() + '/config.js');

class Button extends React.Component {
    render() {
        return (
            <a
                className='big-button'
                href={this.props.href}
                target={this.props.target}
                >
                {this.props.children}
            </a>
        );
    }
}


class Index extends React.Component {
    render() {
        return (
            <div style={{marginTop: 300, marginBottom: 300, paddingLeft: 30}}>
                <Button href={'smt_user_html.html'} target='_self'>
                    用户须知
                </Button>
                <Button href={'smt_zhaopin_md.html'} target='_self'>
                    招聘信息
                </Button>
            </div>
        );
    }
}

module.exports = Index;
