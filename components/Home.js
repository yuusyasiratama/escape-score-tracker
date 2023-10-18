import React from 'react';
import { View, Button } from 'react-native';

const Home = ({ navigation }) => {
  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <Button title="脱出結果の登録" onPress={() => handleNavigate('EscapeResultRegistration')} />
      <Button title="脱出結果の確認" onPress={() => handleNavigate('EscapeGameList')} />
    </View>
  );
};

export default Home;
