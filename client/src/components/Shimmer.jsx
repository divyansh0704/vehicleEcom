import React from 'react'
import "./shimmer.css"
const Shimmer = () => {
  return (
     <>
      {[...Array(6)].map((_, i) => (
        <div className="each-card shimmer-card" key={i}>
          <div className="shimmer-img"></div>
          <div className="shimmer-info">
            <div className="shimmer-line"></div>
            <div className="shimmer-line short"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-btn"></div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Shimmer