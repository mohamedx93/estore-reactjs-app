import React from 'react'

export default function Default({location}:{location:any}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto py-5 text-title text-uppercase text-center">
                    <h1 className="display-3">
                        404
                    </h1>
                    <h1>error</h1>
                    <h2>page not found</h2>
                    <h3>the requested URL <span className="text-danger">{location?.pathname}</span> was not found</h3>
                </div>
            </div>
        </div>
    )
}
