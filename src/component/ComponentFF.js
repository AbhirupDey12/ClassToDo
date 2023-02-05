import React from "react";
import { UserContext, ChannelContext } from "../App";

export default function ComponentFF() {
     return (
          <div>
               <UserContext.Consumer>
                    {
                         user => {
                              return (
                                   <ChannelContext.Consumer>
                                        {
                                             channel => {
                                                  return <div> User Context value is {user} and channel context value {channel} </div>
                                             }
                                        }
                                   </ChannelContext.Consumer>
                              )
                         }
                    }
               </UserContext.Consumer>
          </div>
     )
}