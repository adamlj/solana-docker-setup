import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { AppBar, Typography, Toolbar, LinearProgress, Container, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';

function DefaultLayout({ route }) {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}>
            📦 Sample
          </Typography>
          <IconButton
            color="inherit"
            size="large"
            component={RouterLink} to="/account/edit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{marginTop:"30px"}}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </Container>
    </>
  );
}

DefaultLayout.propTypes = {
  route: PropTypes.object
};

export default DefaultLayout;
