import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users,setUsers]= useState([])
  useEffect(()=>{
    const getUsers = async ()=>{
      try
      {
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data)
      }catch(e){
        console.log(e)
      }
    }
    getUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map(user=>(
           <li className="widgetSmListItem">
           <img
             src={user.img || "https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"}
             alt=""
             className="widgetSmImg"
           />
           <div className="widgetSmUser">
             <span className="widgetSmUsername">{user.username}</span>
           </div>
           <button className="widgetSmButton">
             <Visibility className="widgetSmIcon" />
             Display
           </button>
         </li>
        ))}
      </ul>
    </div>
  );
}
