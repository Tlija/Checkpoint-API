import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const{id}=useParams()
    const [first, setfirst] = useState({})
    const [loading, setloading] = useState(true)
    useEffect(() => {
        // fetch(`https://www.breakingbadapi.com/api/characters/${id}`).then(
        //     (res)=>res.json()
        //  ).then(data=>{
        //     setfirst(data[0])
        //     setloading(false)
        // })
      
    }, [id])
    if (loading) {
        return ".........loading"
    }
  return (
    <div style={{ margin: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
               <img className="img-fluid" src={first.img} alt="" />
              </div>
              <div className="team-content">
                <h3 className="name">{first.name}</h3>
                <h4 className="title">{first.nickname}</h4>
              </div>
              {/* <ul className="social">
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fab fa-facebook"
                  aria-hidden="true"/>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fab fa-twitter"
                  aria-hidden="true"
                />
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fab fa-google-plus"
                  aria-hidden="true"
                />
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fab fa-linkedin"
                  aria-hidden="true"
                />
              </li>
            </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
