
import React, { Component } from 'react';
import {AsyncStorage} from "react-native";

export default class storage {
  static async get(key) {
    const res = await AsyncStorage.getItem(key);
    return res
  }
  static async set(key, value) {
    const res = await AsyncStorage.setItem(key, value);
    return res
  }
  static async remove(key) {
    const res = await AsyncStorage.removeItem(key);
    return res
  }
  static async clear() {
    const res = await AsyncStorage.clear();
    return res
  }
}