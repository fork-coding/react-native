import React, { useEffect, useState } from 'react';
import { NativeModules, Spec, Text, TurboModuleRegistry, View } from 'react-native';

function TurboModuleTest(props) {
  const [readyTurboModules, setReadyTurboModules] = useState([]);
  const [notReadyTurboModules, setNotReadyTurboModules] = useState([]);
  // 获取所有的名字


  useEffect(() => {
    const tempReadyTurboModules = readyTurboModules
    const tempNotReadyTurboModules = notReadyTurboModules
    for(let key in NativeModules){
      const obj = TurboModuleRegistry.get<Spec>(key)
      if(Object.keys(obj).length > 0){
        setReadyTurboModules(tempReadyTurboModules.push(key))
      }else{
        setNotReadyTurboModules(tempNotReadyTurboModules.push(key))
      }
    }
  },[])
  return (
    <View>
      <Text>Test TurboModule</Text>
      <View>
        <Text>实现的有：{readyTurboModules.join('|')}</Text>
      </View>
      <View>
        <Text>未现的有：{notReadyTurboModules.join('|')}</Text>
      </View>
    </View>
  );
}

export default TurboModuleTest;
