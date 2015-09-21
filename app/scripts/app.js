(function (){

    var React = window.React;

    class App extends React.Component {
        render () {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            );
        }
    }

    React.render(<App title="Liste d'épicerie" />, document.getElementById("app"));

})();