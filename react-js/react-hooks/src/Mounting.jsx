import React, { Component, useEffect } from 'react'

class Mounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        };


        console.log("Constructor: Initializing state or props");

    }

    componentDidMount() {
        console.log("ComponentDidMount: Component is mounted");
    }

    render() {
        console.log("Render: Component is rendering");
        return <h1>Mounting using Class component</h1>;

    }
}

const Mounting_Function = () => {
    useEffect(() => {
        console.log("Component is mounted");
    }, [])
}

export { Mounting };
