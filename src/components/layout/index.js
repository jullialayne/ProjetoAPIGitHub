import React from 'react';
import * as s from './styled';

const Layout = ({children}) => {
   
        return (
            <s.WrapperLayout>
                <header>
                    header
                </header>
                {children}

            </s.WrapperLayout>
        );
    }



export default Layout;