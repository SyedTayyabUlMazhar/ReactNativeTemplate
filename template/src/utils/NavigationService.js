/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  StackActions,
  CommonActions,
  DrawerActions,
  TabActions,
} from '@react-navigation/native';
import {Keyboard} from 'react-native';
import React from 'react';

export const navigationRef = React.createRef();

function navigate(routeName, params, stackName) {
  if (stackName) {
    navigationRef.current.navigate(stackName, {screen: routeName, params});
  } else {
    navigationRef.current.navigate(routeName, params);
  }
}

function navigateWithKeboardHide(routeName, params, stackName) {
  Keyboard.dismiss();
  setTimeout(() => {
    navigate(routeName, params, stackName);
  }, 200);
}

function replace(routeName, params) {
  navigationRef.current.dispatch(StackActions.replace(routeName, params));
}

function replaceWithKeboardHide(routeName, params) {
  setTimeout(() => {
    replace(routeName, params);
  }, 200);
}

function push(routeName, params) {
  navigationRef.current.dispatch(StackActions.push(routeName, params));
}

function pop(number) {
  navigationRef.current.dispatch(StackActions.pop(number));
}

function popWithKeyboardHide(number) {
  setTimeout(() => {
    navigationRef.current.dispatch(StackActions.pop(number));
  }, 300);
}

function popToTop() {
  navigationRef.current.dispatch(StackActions.popToTop());
}

function getNavigator() {
  return navigationRef.current;
}

function reset(name, params) {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name, params}],
  });
  navigationRef.current.dispatch(resetAction);
}

function resetWithKeyboardHide(name, params) {
  Keyboard.dismiss();
  setTimeout(() => {
    reset(name, params);
  }, 200);
}

function jumpTo(routeName, params) {
  navigationRef.current.dispatch(TabActions.jumpTo(routeName, params));
}

function getCurrentRoute() {
  return getNavigator().getCurrentRoute();
}

function getCurrentRouteName() {
  return getNavigator().getCurrentRoute()?.name;
}

function goBack() {
  navigationRef.current.dispatch(CommonActions.goBack());
}

function closeDrawer() {
  navigationRef.current.dispatch(DrawerActions.closeDrawer());
}

function hideHeader(navigation) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);
}

function setTitle(navigation, title) {
  React.useEffect(() => {
    navigation.setOptions({headerTitle: title.toUpperCase()});
  }, [title]);
}

function setHeader(navigation, title, headerRight) {
  React.useEffect(() => {
    navigation.setOptions({headerTitle: title, headerRight: headerRight});
  }, []);
}

export default {
  navigationRef,
  replace,
  push,
  pop,
  jumpTo,
  getCurrentRoute,
  getNavigator,
  navigate,
  reset,
  popToTop,
  goBack,
  closeDrawer,
  hideHeader,
  setTitle,
  getCurrentRouteName,
  navigateWithKeboardHide,
  resetWithKeyboardHide,
  replaceWithKeboardHide,
  popWithKeyboardHide,
  setHeader,
};
