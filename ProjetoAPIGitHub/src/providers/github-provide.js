import React,{createContext, useState} from "react";

export const GitHubContext = createContext({
    user:{},
    repositories:[],
    starred: []
});

const GitHubProvider = ({children}) =>{
    const[gitHubState]=useState({
        user: {
            login:undefined,
            name:'Jullia',
            public_url:undefined, 
            blog:undefined,
            company:undefined,
            location:undefined,
            followers:0,
            following:0,
            public_gits:0,
            public_repos:0,

        },
        repositories: [],
        starred:[]
    });
    const contextValue = {gitHubState};
    

    return(
        <GitHubContext.Provider value={contextValue}>
            {children}
        </GitHubContext.Provider>
    );
}

export default GitHubProvider;