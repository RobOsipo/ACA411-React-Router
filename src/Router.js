import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App.js'
import Home from './Home.js'


const Router = () => {
    return (
        <Routes>
            <Route path="/app" component={App} />
            
            <Route path="/home" component={Home} />
           
        </Routes>
    )
}

export default Router
