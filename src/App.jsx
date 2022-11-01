import React, { createContext, useContext, useState } from 'react'
import { NavLink, Outlet, Route, Routes, useSearchParams } from 'react-router-dom'


const AccountContext= createContext([])


 
function Layout(){
  return(
    <div>
      <div className='nav'>
      <h1>Search App</h1>
      </div>

      <nav>
        <NavLink to='/'className='link' >Home</NavLink>
        <NavLink to='/search' className='link'>Search</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}
function Home(){
  const {account, setAccount}= useContext(AccountContext)
 const handleSubmit=(e)=>{
  e.preventDefault();
  const form = e.target
  let inputField= e.target[0]
 let  username= inputField.value

  setAccount((prev)=>{
    return [...prev, username]
  })
  // console.log(account)
 }
return(
  <div>
  <form className='form'onSubmit={handleSubmit}>
    <label htmlFor='inputField' >Input</label>
    <input name='inputField' type='text'  />
  </form>
  <h1>Type a valid instagram user</h1>
  <ul>
    {account.map((username, index)=>{
      return(
        <li key={index}><a href={`https://instagram.com/${username}`} target='_blank'>{username} </a>  </li>
      )
    } )}
  </ul>
  </div>)
}
const EachUser = ({account})=>{
  return(
    <div>
      <ul>
        {account.map((username, index)=>{
          return(
            <li key={index}><a href={`https://instagram.com/${username}`} target='_blank'>{username} </a> </li>
          )
        }) }
      </ul>
    </div>
  )

}

function Search(){
  const {account } = useContext(AccountContext)
  if (account.length ==0 ){
return <h1>No User has been added to DataBase yet go to home page and add your user</h1>
  }
  const [searchParams, setSearchParams] =useSearchParams()

  const handletheChange= (e)=>{
  let typed = e.target.value;
  if(typed){
    setSearchParams({search :typed})
  }
  else setSearchParams({})
  }
  return(
    <div>
      <h1> DataBase of available users</h1>
      <input placeholder='search a user' type='text' name='search'
       value={searchParams.get('search')} onchange={handletheChange}/>
      <ul>
        {account.filter((user)=>{
     let filter = searchParams.get('search')
     let name = user.toLowerCase()
     return name.includes((filter).toLowerCase)
        }).map((user)=>{
          return (
            <li><a href={`https://instagram.com/${user}`} target='_blank'>{user} </a> </li>
          )
        })
        }
      </ul>
        
    </div>
  )
}

export default function App() {
  const [account, setAccount]= useState([])
  return (
    <AccountContext.Provider value={{account, setAccount} }>
<div>
<Layout/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
  </Routes>  
</div>
    </AccountContext.Provider>


  )
}
