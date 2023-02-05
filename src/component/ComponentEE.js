import React , {useContext} from "react";
// import ComponentFF from "./ComponentFF";
import { UserContext , ChannelContext } from "../App";

export default function ComponentEE() {

     let user = useContext(UserContext)
     let channel = useContext(ChannelContext)


     return (
          <div>
               User : {user} <br />
               Channel : {channel}
          </div>
     )


}