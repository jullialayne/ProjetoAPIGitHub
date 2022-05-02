import React from "react";
import * as s from './styled';



const Profile = () => {

    return (
      <s.Wrapper>
         <s.WrapperImage src="https://avatars.githubusercontent.com/u/83183478?v=4" alt="Avatar of user"/>
          <s.WrapperInfoUser>
            <div>
          <h1>Ju</h1>
          <s.WrapperUserName>
          <h3>Username:</h3><a href='https://github.com/jullialayne' target='_blank' rel='noreferrer'> jullialayne</a>
          
          </s.WrapperUserName>
        </div>
          <s.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>
            </div>
          
          </s.WrapperStatusCount></s.WrapperInfoUser>
        </s.Wrapper>);
}

export default Profile;