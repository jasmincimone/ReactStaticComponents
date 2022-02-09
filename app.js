class App extends React.Component {
    state = {
        dashboard: dashboard,
    }

    render() {
        return(
            <div>
            <h1>Commence Dashboard Creation!</h1>
            </div>
        )
    }
}

class Dashboard extends React.Component {
    render() {
        return(
            <div>
               <ul>
                   <li>{dashboard.sidebar.dashboard}</li>
                   <li>{dashboard.sidebar.widget}</li>
                   <li>{dashboard.sidebar.reviews}</li>
                   <li>{dashboard.sidebar.customers}</li>
                   <li>{dashboard.sidebar.onlineanalysis}</li>
                   <li>{dashboard.sidebar.settings}</li>
               </ul>
            </div>
)}

/*{ 
            <div>
            
            </div>


            <div>

            </div>


            <div>

            </div>


            <div>
                <div>

                </div>
            </div> */}
//         )
//     }
// }


ReactDOM.render(< App/>, document.getElementById('root'));