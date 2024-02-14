import { Layout, Select, Space, Button } from 'antd';
import { cryptoData } from '../../data';
import { useCrypto } from '../../context/crypto-context';
import { useEffect, useState } from 'react';

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

export default function AppHeader() {
  const [select, setSelect] = useState(false)
  const { crypto } = useCrypto()

  useEffect(() => {
    function keypress(event) {
      if (event.key === '/') {
        setSelect((prev) => !prev)
      }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, [])

  function handleSelect(value) {
    console.log(value)
  }

  return (<Layout.Header style={headerStyle}>
    <Select
      style={{
        width: 250,
      }}
      open={select}
      onSelect={handleSelect}
      value={'press / to open'}
      optionLabelProp="label"
      onClick={() => setSelect((prev) => !prev)}
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