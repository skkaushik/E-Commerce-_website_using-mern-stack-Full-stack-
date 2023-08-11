import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

function Profile() {
  return (
    <Layout>
        <UserMenu/>
        <h1>user profile</h1>
    </Layout>
  )
}

export default Profile