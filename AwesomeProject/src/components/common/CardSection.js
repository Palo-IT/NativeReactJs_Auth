import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    borderColor: '#ddd',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'relative',
  }
};

export { CardSection };
