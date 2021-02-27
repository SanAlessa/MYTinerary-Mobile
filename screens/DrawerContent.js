import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Title, Drawer, } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';


function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/plane.jpg')} style={{height: 170, width: 280, justifyContent: 'flex-end'}}>
        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
          <Title style={styles.title}>{!props.loggedUser ? 'Hello!' : 'Welcome ' + props.loggedUser.name}</Title>
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => { props.navigation.navigate('Home') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="image-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Cities"
              onPress={() => { props.navigation.navigate('Cities') }}
            />
            {!props.loggedUser &&
              <>
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon
                      name="file-edit-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Sign Up"
                  onPress={() => { props.navigation.navigate('SignUp') }}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon
                      name="login"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Log In"
                  onPress={() => { props.navigation.navigate('LogIn') }}
                />
              </>
            }
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {props.loggedUser &&
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="exit-to-app"
                color={color}
                size={size}
              />
            )}
            label="Sign Out"
            onPress={() => props.logOut()}
          />
        </Drawer.Section>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    marginLeft: 10
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
});

const mapStateToProps = (state) => {
  return {
    loggedUser: state.loggedUser
  }
}

const mapDispatchToProps = {
  logOut: userActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)