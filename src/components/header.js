import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import {BsCart4} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';

const header = () => {
  return (
    <>
    <header className='header-top-strip py-1'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p className='text-white mb-0'>
              Sri lanka's Largest Apparel MarketPlace
            </p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white mb-0'>
              We provide 24/7 Service
            </p>
          </div>
        </div>

      </div>
    </header>
    <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h1>
                <Link >Apparex.lk</Link>
              </h1>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input type="text" class="form-control" placeholder="Search any Product Here..." aria-label="Search any Product Here..." aria-describedby="basic-addon2"/>
                      <span className="input-group-text p-2" id="basic-addon2"><BsSearch className='fs-6'/></span>
                </div>
            </div>
            <div className='col-4'>
              <div className='header-upper-links d-flex aligh-items-center justify-content-between'>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                  <p>
                    Login/Signup
                  </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <BsCart4 className='fs-2'/>
                    <div className='d-flex flex-column'>
                      <span className='badge badge-warning text-dark'>0</span>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <CgProfile className='fs-2'/>
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </header>
    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center'>
              <div className='menu-links'>
                <div className='d-flex gap-50 '>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/">Women</NavLink>
                  <NavLink to="/">Kids & Baby</NavLink>
                  <NavLink to="/">Men</NavLink>
                  <NavLink to="/">Sale</NavLink>
                  <NavLink to="/">New Arrivals</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default header