class App extends React.Component {
    state = {
        dashboard: dashboard,
        

    }

    render() {
        return(
        <div className='app-container'>

            <header className='header'>    
            <h1>React Dashboard</h1>
            </header>

            <div className='sideBar'>
                    <h3>Dashboard</h3>
                    <h3>Widget</h3>
                    <h3>Reviews</h3>
                    <h3>Customers</h3>
                    <h3>Online Analysis</h3>
                    <h3>Settings</h3>
            </div>

            <div className='reviewsBox'>
                <h2>Reviews</h2>
                <h1>1,281</h1>
            </div>

            <div className='ratingsBox'>
                <h2>Average Rating</h2>
                <h1>4.6</h1>
            </div>

            <div className='sentimentAnalysisBox'>
                <h2> Sentiment Analysis </h2>
                    <h1>960</h1>
                    <h1>122</h1>
                    <h1>321</h1>
            </div>

            <div className='websiteVisitorsBox'>
                <h2>Website Visitors</h2>
                <h1>821</h1>
                <div className='blankBox'>
                    <h1>.<br/><br/><br/><br/><br/><br/><br/><br/><br/></h1>
                </div>
            </div>



        </div>
        )
    }
}


 
            


            


ReactDOM.render(< App/>, document.getElementById('root'));