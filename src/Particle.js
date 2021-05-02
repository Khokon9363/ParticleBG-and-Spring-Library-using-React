import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'

const Particle = () => {
    return (
        <div>
            <h1 style={{textAlign: "center", color: "whitesmoke", marginTop: "200px"}}>This is ParticleBG Library using React</h1>
            <ParticlesBg type="random" bg={true}/>
            <ParticlesBg type="square" bg={true}/>
            <ParticlesBg type="color" bg={true}/>
            <ParticlesBg type="ball" bg={true}/>
            <ParticlesBg type="lines" bg={true}/>
            <ParticlesBg type="thick" bg={true}/>
            <ParticlesBg type="circle" bg={true}/>
            <ParticlesBg type="cobweb" bg={true}/>
            <ParticlesBg type="polygon" bg={true}/>
            <ParticlesBg type="tadpole" bg={true}/>
            <ParticlesBg type="fountain" bg={true}/>
        </div>
    )
}

export default Particle