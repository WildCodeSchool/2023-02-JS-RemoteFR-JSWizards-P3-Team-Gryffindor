import { Button, Form, Input } from "antd";

function Utilisateur() {
  return (
    <div className="flex justify-center mt-20">
      <Form
        className="bg-primary_black pt-10 px-10 rounded-3xl"
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
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            className="w-96 placeholder-gray-500 placeholder-opacity-75"
            placeholder="Identifiant"
          />
        </Form.Item>

        <Form.Item
          name="E-mail"
          rules={[
            {
              required: true,
              message: "Please input your E-mail adress!",
            },
          ]}
        >
          <Input
            className="w-96  placeholder-gray-500 placeholder-opacity-75"
            placeholder="Adresse e-mail"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            className="w-96 placeholder-gray-500 placeholder-opacity-75"
            placeholder="Mot de passe"
          />
        </Form.Item>

        <Form.Item
          name="new password"
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
          ]}
        >
          <Input.Password
            className="w-96 placeholder-gray-500 placeholder-opacity-75"
            placeholder="Nouveau Mot de passe"
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className="bg-primary_blue mr-32"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Utilisateur;
