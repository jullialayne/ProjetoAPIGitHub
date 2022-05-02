import React from "react";
import RepositoryItem from "../repository-item";
import * as s from "./styled";


const Repositories = () =>{
    return (
        <s.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">
            <s.WrapperTabList>
                <s.WrapperTab>
                    Repositories
                </s.WrapperTab>
                <s.WrapperTab>
                    Starred
                </s.WrapperTab>
            </s.WrapperTabList>
            <s.WrapperTabPanel>
                <RepositoryItem  name='repo1' 
                linkToRepo='https://github.com/jullialayne/ProjetoW'
                fullName='jullialayne/ProjetoW'/>
            </s.WrapperTabPanel>
            <s.WrapperTabPanel>
            <RepositoryItem name='repo2' 
                linkToRepo='https://github.com/jullialayne/ArquivosEStreams'
                fullName='jullialayne/ArquivosEStreams'/>
            </s.WrapperTabPanel>
        </s.WrapperTabs>
    );
}

export default Repositories;