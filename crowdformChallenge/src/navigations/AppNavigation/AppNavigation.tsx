import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useAppSelector} from '../../app/hooks';
import {selectIsUserAuthenticated} from '../../features/auth/authSelectors';

// <-- Navigations -->
import MainNavigation from '../MainNavigation/MainNavigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

const AppNavigation = () => {
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  return (
    <NavigationContainer>
      {isUserAuthenticated ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
