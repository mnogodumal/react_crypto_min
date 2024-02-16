import { Flex, Select, Space, Form, Input, Checkbox, Button } from "antd"
import { useState } from "react"
import { useCrypto } from "../context/crypto-context"

export default function AddAssetForm() {

  const { crypto } = useCrypto()
  const [coin, setCoin] = useState(null)
  //

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (!coin) {
    return (
      <Select
        style={{ width: '100%' }}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        placeholder={'press / to open'}
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
    )
  }

  return (
    <>
      <Select
        style={{ width: '100%' }}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        placeholder={'press / to open'}
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
      <Flex align="center" style={{ marginTop: 20 }}>
        <img style={{ width: 40, marginRight: 10 }} src={coin.icon} alt={coin.name} />
        <h2>{coin.name} ({coin.symbol})</h2>
      </Flex>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}