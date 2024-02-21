import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';

export default function AppLayout() {
  const { loading } = useContext(CryptoContext)

  if (loading === true) {
    return <Spin fullscreen />
  } else {
    return (
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    )
  }
}