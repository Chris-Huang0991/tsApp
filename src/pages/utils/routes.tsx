import React from 'react'
import CompanyCard from '../CompanyCard';
import Profile from '../Profile';
import Account from '../Account';
import Err from '../Err'

export const routes = [
  { exact: true, path: '/', component: React.lazy(() => import('pages/Signin')), },
  { exact: true, path: '/Dashboard', component: React.lazy(() => import('pages/Dashboard')) },
  { exact: true, path: '/CompanyList', component: CompanyCard },
  { exact: true, path: '/Profile', component: Profile },
  { exact: true, path: '/Account', component: Account },
  { exact: false, path: '*', component: Err }
]