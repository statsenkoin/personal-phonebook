import { AppNav, AuthNav, UserMenu } from 'components';
import { useAuth } from 'hooks';

export function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <AppNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
