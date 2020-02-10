import React, {Component} from 'react';
import Contacts from './components/contacts';
import Education from './components/education';


class App extends Component {
    render() {
        return (
            <div>
             <Contacts contacts={this.state.contacts} />
             <Education education={this.state.education} />
            </div>
        )
    }

    state = {
        contacts: {}
    };


    componentDidMount() {
        fetch('http://localhost:8081/resume')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log);

        fetch('http://localhost:8081/resume')
            .then(res => res.json())
            .then((data) => {
                this.setState({ education: data })
            })
            .catch(console.log);
    }
}

export default App;
