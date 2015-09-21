(function ($){

    var React = window.React;

    var App = React.createClass({
        
        getInitialState () {
            return {
                itemList: []
            };
        },

        componentDidMount: function() {
            $.get('/api/getList', function(data) {
                if (this.isMounted()) {
                    this.setState({
                        itemList: data
                    });
                }
            }.bind(this));
        },

        render () {
            console.log(this.state);
            return (
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            );
        }
    });

    React.render(<App title="Liste d'épicerie" />, document.getElementById("app"));

})(jQuery);