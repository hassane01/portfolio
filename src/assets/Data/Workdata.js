import cryptoimg from '../../assets/Cryptoprojct.jpeg';
import weatherimg from '../../assets/watercolor.jpeg';
import weathergif from '../../assets/videos/weathervid.gif';
import cryptogif from '../../assets/videos/cryptovid.gif';

export const data = [
  {
    id: 1,
    name: 'cryptoAppName', // translation key
    demolink: 'https://app-crypto1.netlify.app/',
    repolink: 'https://github.com/hassane01/crypto-app',
    image: cryptoimg,
    gif: cryptogif,
    title: 'cryptoAppTitle', // translation key
    description: 'cryptoAppDescription', // translation key
    skills: 'cryptoAppSkills', // translation key
  },
  {
    id: 2,
    name: 'weatherAppName', // translation key
    demolink: 'https://app-weather012.netlify.app/',
    repolink: 'https://github.com/hassane01/weather-app',
    image: weatherimg,
    gif: weathergif,
    title: 'weatherAppTitle', // translation key
    description: 'weatherAppDescription', // translation key
    skills: 'weatherAppSkills', // translation key
  },
];
