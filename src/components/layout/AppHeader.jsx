import { Layout, Select, Space, Button } from 'antd';
import { cryptoData } from '../../data';
import { useCrypto } from '../../context/crypto-context';

const headerStyle = {
  with: '100%',
  textAlign: 'center',
  backgroundColor: '#010b1ae8',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const options = cryptoData.result

console.log(options)

export default function AppHeader() {
  const { crypto } = useCrypto()
  return (<Layout.Header style={headerStyle}>
    <Select
      style={{
        width: 250,
      }}
      value={'press / to open'}
      optionLabelProp="label"
      options={crypto.map(coin => ({
        label: coin.name,
        value: coin.id,
        icon: coin.icon
      }))}
      optionRender={(option) => (
        <Space>
          <span>
            <img style={{ width: 20 }} src={option.data.icon} alt="icon" />
            {option.data.label}
          </span>
        </Space>
      )}
    />

    <Button type="primary">Add Asset</Button>
  </Layout.Header>)
}