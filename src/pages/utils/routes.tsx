import Dashboard from '../Dashboard';
import CompanyList from '../CompanyList';
import Profile from '../Profile';
import Account from '../Account';
import Err from '../Err'

export const routes = [
  { exact: true, path: '/Dashboard', component: Dashboard, data: ['a', 'a']},
  { exact: true, path: '/CompanyList', component: CompanyList },
  { exact: true, path: '/Profile', component: Profile },
  { exact: true, path: '/Account', component: Account },
  { exact: false, component: Err }
]