import React, { useState } from 'react';

import SwaggerUI from "swagger-ui-react"
import { useTheme } from '@mui/material/styles';
import "swagger-ui-react/swagger-ui.css";


import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import Content from '../content/Content';

import { Container, Box, Toolbar, styled } from '@mui/material';

export default function PublicAPI() {
    return (
        <SwaggerUI
            url="https://api.tidbyt.com/swagger.json"
            tryItOutEnabled={true}
        />
    )
}
