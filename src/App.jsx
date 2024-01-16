import React, { useState } from 'react'
import { Link, NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Mr } from './data';
import './indexx.css'

function App() {
  const [count, setCount]=useState(0)
  let manba;
  const ranglar=[`bg-[#419EBB]`, `bg-[#EDA249]`, `bg-[#6D2ED5]`, `bg-[#D14C32]`,`bg-[#D83A34]`,`bg-[#CD5120]`,`bg-[#1EC1A2]`,`bg-[#2D68F0]`]
function Mercury(a, b){
  let x=[a , b]
  manba=Mr[x[0].a]
  return ( <div>
          <div className='flex justify-around items-center'>
          <div>
              <h1 className='text-[28px] font-medium'>THE PLANETS</h1>
          </div>
                    <nav>
                      <ul className='flex gap-[33px]'>
                        <li>
                            <NavLink to={"/"} onClick={()=>setCount(0)}>Mercury</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/venus"} onClick={()=>setCount(0)}>Venus</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/earth"} onClick={()=>setCount(0)}>Earth</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/mars"} onClick={()=>setCount(0)}>Mars</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/jupiter"} onClick={()=>setCount(0)}>Jupiter</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/saturn"} onClick={()=>setCount(0)}>Saturn</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/uranus"} onClick={()=>setCount(0)}>Uranus</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/neptune"} onClick={()=>setCount(0)}>Neptune</NavLink>
                        </li>
                      </ul>
            </nav>
       </div>

      <div>
        <div className='flex justify-center gap-[300px]'>
          <div className=' w-[666px] h-[666px] flex justify-center items-center'>
                <img src={x[0].b == 0 || x[0].b==2 ?`${manba.images.planet}`: `${ manba.images.internal}`} alt="" />
                <div className='w-[163px] h-[199px] absolute mt-[300px]'>
                   <img src={ x[0].b==2 ? `${manba.images.geology}`:""} alt="" />
                </div>
          </div>
          <div>
            <div className='w-[350px] h-[330px]'>
              <h1 className='text-[80px] font-medium'>{manba.name}</h1>
              <p className='h-[150px]'>{x[0].b == 0 ?`${manba.overview.content}`: `${x[0].b == 1 ? manba.structure.content: manba.geology.content}`}</p>
              <h3 className='mt-6'>Source : <a href={manba.overview.source}>Wikipedia </a></h3>
            </div>
            <div className='flex flex-col gap-4 mt-[39px]'>
            <button className={x[0].b==0 ? `border-solid border-[2px] border-slate-600  w-full h-12 text-left rounded-lg pl-3 ${ranglar[x[0].a]}`:'border-solid border-[2px] border-slate-600 w-full h-12 text-left rounded-lg pl-3'} onClick={()=>{Bir(x[0].a)}}><span className='mr-[8vw] opacity-40'>01</span> OVERVIEW </button>
            <button className={x[0].b==1 ? `border-solid border-[2px] border-slate-600  w-full h-12 text-left rounded-lg pl-3 ${ranglar[x[0].a]}`:'border-solid border-[2px] border-slate-600 w-full h-12 text-left rounded-lg pl-3'} onClick={()=>{Ikki(x[0].a)}}><span className='mr-[8vw] opacity-40'>02</span> Internal Structure </button>
            <button className={x[0].b==2 ? `border-solid border-[2px] border-slate-600 w-full h-12 text-left rounded-lg pl-3 ${ranglar[x[0].a]}`:'border-solid border-[2px] border-slate-600 w-full h-12 text-left rounded-lg pl-3'} onClick={()=>{Uch(x[0].a)}}><span className='mr-[8vw] opacity-40' >03</span> Surface Geology </button>

            </div>
          </div>
        </div>
        <div className='flex gap-[30px] w-full justify-center'>
          <div className='w-[255px] h-[128px] border-solid border-[2px] border-slate-700 p-3'>
            <p>ROTATION TIME</p>
            <h2 className='text-[40px] '>{manba.rotation}</h2>
          </div>
          <div className='w-[255px] h-[128px] border-solid border-[2px] border-slate-700 p-3'>
            <p>REVOLUTION TIME</p>
            <h2 className='text-[40px] '>{manba.revolution}</h2>
          </div>
          <div className='w-[255px] h-[128px] border-solid border-[2px] border-slate-700 p-3'>
            <p>RADIUS</p>
            <h2 className='text-[40px] '>{manba.radius}</h2>
          </div>
          <div className='w-[255px] h-[128px] border-solid border-[2px] border-slate-700 p-3'>
            <p>AVERAGE TEMP.</p>
            <h2 className='text-[40px] '>{manba.temperature}</h2>
          </div>
        </div>
      </div>

  </div>)
}


function Bir(x){
  const a={a:x, b:0}
  Mercury(a, 0);
  setCount(0);
}
function Uch(x){
  const a={a:x, b:2}
  Mercury(a, 0);
  setCount(2);
}
function Ikki(x){
  const a={a:x, b:1}
  Mercury(a, 0);
  setCount(1);
}


  const routr=createBrowserRouter([
    {
      path: "/",
      element:<Mercury a="0" b={count} />,
    },
    {
      path: "/venus",
      element: <Mercury a="1" b={count}/>,
    },
    {
      path: "/earth",
      element: <Mercury a="2" b={count}/>,
    },
    {
      path: "/mars",
      element: <Mercury a="3" b={count}/>,
    },
    {
      path: "/jupiter",
      element: <Mercury a="4" b={count}/>,
    },
    {
      path: "/saturn",
      element: <Mercury a="5" b={count}/>,
    },
    {
      path: "/uranus",
      element: <Mercury a="6" b={count}/>,
    },
    {
      path: "/neptune",
      element: <Mercury a="7" b={count}/>,
    }
  ])



  return (
    <div className='min-h-[100vh] bg-[#000] text-white pb-10'>
      <div>
      <RouterProvider router={routr}/>
      </div>
    </div>
  )
}

export default App