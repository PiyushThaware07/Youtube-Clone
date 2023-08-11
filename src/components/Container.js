import React from 'react'
// Imports
import Category from './Category';
import Video from './Video';

export default function Container() {
  return (
    <>
      <Category />
      <div className="container-fluid bg-primary">
        <div className="row">
          <div className="col-md-4 bg-light"><Video /></div>
          <div className="col-md-4 bg-danger"><Video /></div>
          <div className="col-md-4 bg-light"><Video /></div>
        </div>
      </div>
    </>
  )
}
