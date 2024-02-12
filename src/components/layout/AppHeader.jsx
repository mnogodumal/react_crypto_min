import { Layout, Select, Space } from 'antd';
import { cryptoData } from '../../data';

const headerStyle = {
  with: '100%',
  textAlign: 'center',
  // backgroundColor: '#010b1ae8',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const options = cryptoData.result

console.log(options)

export default function AppHeader() {
  return (<Layout.Header style={headerStyle}>
    <Select
      mode="multiple"
      style={{
        width: '200px',
      }}
      // placeholder="select one country"
      defaultValue={[]}
      // onChange={handleChange}
      optionLabelProp="label"
      options={options}
      optionRender={(option) => (
        <Space>
          <span role="img" aria-label={option.symbol}>
            {option.icon}
          </span>
          {option.name}
        </Space>
      )}
    />
  </Layout.Header>)
}