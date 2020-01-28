import React, { Fragment } from 'react';
const BASE_URL = "https://swapi.co/api/people/";



class Actors extends React.Component {

    constructor(props) {
        super(props);
        this.clickNext = this.clickNext.bind(this);
        this.clickPrevious = this.clickPrevious.bind(this);
        this.clickAddNewActor = this.clickAddNewActor.bind(this);
        this.changeInputNewActor = this.changeInputNewActor.bind(this);
        this.clickDeleteActor= this.clickDeleteActor.bind(this);
    }
    state = {
        result: {},
        nextLink: null,
        prevLink: null,
        newActor: null,
    }
    componentDidMount() {
        this.fetchGetActorsFromLink(BASE_URL);
    }
    setNextLinkWithActors = result => {
        this.setState({ nextLink: result.next });
    }
    setPrevLinkWithActors = result => {
        this.setState({ prevLink: result.previous })
    }
    setActors = result => {
        this.setState({ result });
        this.setNextLinkWithActors(result);
        this.setPrevLinkWithActors(result);
    }
    getActors = (objectResults) => {
        let actors = [];
        for (let actor in objectResults) {
            actors.push(objectResults[actor].name);
        }
        return actors;
    }
    clickNext = () => {
        this.fetchGetActorsFromLink(this.state.nextLink);
    }
    clickPrevious = () => {
        this.fetchGetActorsFromLink(this.state.prevLink);
    }
    fetchGetActorsFromLink = link => {
        fetch(link)
            .then(result => result.json())
            .then(result => this.setActors(result))
            .catch(error => error);
    }
    clickAddNewActor = () => {
        this.state.result.results.push({ name: this.state.newActor })
        this.setState({ newActor: null })
    }
    changeInputNewActor = (event) => {
        this.setState({ newActor: event.target.value })
    }
    clickDeleteActor=()=>{
        this.state.result.results.pop();
        this.setState({ newActor: null })
    }
    render() {
        return (
            <main>
                <ul>
                    {this.getActors(this.state.result.results).map((actor) => (
                        <li>{actor}</li>
                    ))}

                </ul>
                <section>
                    {(this.state.prevLink) ?
                        (<button onClick={this.clickPrevious}>Previous</button>) :
                        (<button disabled onClick={this.clickPrevious}>Previous</button>)
                    }
                    {(this.state.nextLink) ?
                        (<button onClick={this.clickNext}>Next</button>) :
                        (<button disabled onClick={this.clickNext}>Next</button>)
                    }
                </section>
                <section className="addNewActor">
                    <input onChange={this.changeInputNewActor} type="text" />
                    {(this.state.newActor) ?
                        (<input onClick={this.clickAddNewActor} type="button" value="add new actor" />) :
                        (<input disabled onClick={this.clickAddNewActor} type="button" value="add new actor" />)
                    }
                    <input onClick={this.clickDeleteActor} type="button" value="delete actor" />
                </section>
            </main>



        )
    }
}
export default Actors;