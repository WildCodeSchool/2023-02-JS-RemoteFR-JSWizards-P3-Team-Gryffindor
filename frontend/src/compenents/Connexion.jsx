import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

function App() {
  return (
    <div className="flex justify-center h-screen items-center bg-primary_blue ">
      <Form
        name="normal_login"
        className="login-form bg-connexion_login w-80 h-auto rounded-3xl border-solid	border-2 border-black"
        initialValues={{
          remember: true,
        }}
      >
        <p className="pt-10 pb-6 text-xl">Bienvenue !</p>

        <Form.Item
          className="pr-4 pl-4"
          name="username"
          rules={[
            {
              required: true,
              message: "Veuillez entrer votre adresse email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          className="pr-4 pl-4"
          name="password"
          rules={[
            {
              required: true,
              message: "Veuillez entrer votre mot de passe!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mot de passe"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="pb-2">Ce souvenir de moi</Checkbox>
          </Form.Item>

          <p className="login-form-forgot"> Mot de passe oublié ?</p>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button text-black border-solid border-1 border-sky-500"
          >
            Connexion
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default App;
