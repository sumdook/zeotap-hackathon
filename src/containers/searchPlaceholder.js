import React from 'react';
import {Icon} from 'antd';
import styled from 'styled-components';

const Search = styled.div`
    height:100%;
    width:100%;
    margin:auto;
    text-align:center;
    vertical-align:center;
    margin-top:25vh;
    opacity:.3;
`;

const searchPlaceholder = () => {
  return (
    <Search>
        <Icon type="file-search" style={{fontSize:100,marginBottom:20}} theme="outlined" />
        <h1>Please Search for advertiser</h1>
    </Search>
  )
}

export default searchPlaceholder;
