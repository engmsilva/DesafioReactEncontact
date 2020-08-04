import { navigate, usePath } from 'hookrouter';
import { getIsAuth } from './localStorage';

export default function Authenticated () {
  const authCondition = getIsAuth();
  const currentPath = usePath(false); // Set to passive, because we don't need to watch path changes

  if(!authCondition){
    navigate('/', false, {returnTo: currentPath});
    return null;
  }
  return true;
};