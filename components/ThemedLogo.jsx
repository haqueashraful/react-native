import { Image, useColorScheme } from 'react-native'

// logo
import DarkLogo from '../assets/img/logo-dark.svg';
import LightLogo from '../assets/img/logo.svg';

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;
  return (
    <>
        <Image source={logo} {...props} />
    </>
  )
}

export default ThemedLogo;