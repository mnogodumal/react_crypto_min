import { Layout } from 'antd';

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 60,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#01070fe8',
};

export default function AppHeader() {
  return (<Layout.Header style={headerStyle}>Header</Layout.Header>)
}