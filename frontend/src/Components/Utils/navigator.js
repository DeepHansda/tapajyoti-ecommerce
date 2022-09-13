import { useNavigate } from "react-router-dom"


export default function navigator(url){
   const navigate = useNavigate()
   navigate(url)
}
