import { UserData } from '../models/interface';

export function getUserFromLocalStorage() {
  const userInfo = localStorage.getItem('useInfo');

  const user: UserData = userInfo ? JSON.parse(userInfo) : { name: '', isSignUp: false, email: '' };
  const isSignUp = user.isSignUp || false;
  const name = user.name || '';
  const email = user.email || '';
  const id = user.id || 0;

  return {
    isSignUp,
    name,
    email,
    id,
  };
}
