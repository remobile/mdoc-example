### 这是echart示例的页面

## 静态1

``` react

<div>
<h1>Hello, world!</h1>
<h2>Hello, world!</h2>
<h3>Hello, world!</h3>
</div>

```

## 静态2


``` react

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

<ReactTest num={123}/>


```

## 动态


``` react static=false

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


```
