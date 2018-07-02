class ReactTest extends React.Component {
    onClick() {
        alert('show');
    }
    render() {
        return (
            <div>
                <h1 onClick={this.onClick.bind(this)}>Hello, world! {this.props.num}</h1>
                <h2>Hello, world!</h2>
                <h3>Hello, world!</h3>
            </div>
        );
    }
}

module.exports = <ReactTest num={123}/>
