import { useContext } from "react"
import { AdminContext } from "../context/AdminContext"
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from "../context/DoctorContext"

function NavBar() {
  const { aToken, setAtoken } = useContext(AdminContext)
  const { dToken, setDToken } = useContext(DoctorContext)
  const navigate = useNavigate()

  function logout() {
    navigate('/')
    aToken && setAtoken('')
    aToken && localStorage.removeItem('aToken')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b border-gray-300 bg-white">
      <div className="flex items-center gap-2 text-xs">
        <p className="text-3xl text-blue-700 font-bold cursor-pointer">Carely</p>
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className="cursor-pointer bg-blue-500 text-white text-sm px-10 py-2 rounded-full">Logout</button>
    </div>
  )
}

export default NavBar
