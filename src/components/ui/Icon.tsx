import React, { memo } from 'react';
import { IconType } from '../../constants/Types';

type IconLibrary = 'FontAwesome' | 'MaterialIcons' | 'Ionicons' | 'Feather' | 'FontAwesome5' | 'AntDesign' | 'MaterialCommunityIcons' | 'EvilIcons' | 'Foundation';

const Icon = memo((props: IconType & { type: IconLibrary }) => {
  const { name, type, size, color } = props;

  let IconComponent;
  switch (type) {
    case "FontAwesome":
      IconComponent = require('react-native-vector-icons/FontAwesome').default;
      break;
    case "MaterialIcons":
      IconComponent = require('react-native-vector-icons/MaterialIcons').default;
      break;
    case "Ionicons":
      IconComponent = require('react-native-vector-icons/Ionicons').default;
      break;
    case "Feather":
      IconComponent = require('react-native-vector-icons/Feather').default;
      break;
    case "FontAwesome5":
      IconComponent = require('react-native-vector-icons/FontAwesome5').default;
      break;
    case "AntDesign":
      IconComponent = require('react-native-vector-icons/AntDesign').default;
      break;
    case "MaterialCommunityIcons":
      IconComponent = require('react-native-vector-icons/MaterialCommunityIcons').default;
      break;
    case "EvilIcons":
      IconComponent = require('react-native-vector-icons/EvilIcons').default;
      break;
    case "Foundation":
      IconComponent = require('react-native-vector-icons/Foundation').default;
      break;
    default:
      return null;
  }

  return <IconComponent name={name} size={size} color={color} />;
});

export default Icon;
