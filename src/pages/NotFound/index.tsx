import React from "react"
import { Link } from 'react-router-dom'
export const PageNotFound = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <Link to="/">Voltar para home </Link>
        </div>
    )
}