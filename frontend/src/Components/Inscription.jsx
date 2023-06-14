import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function Inscription() {
  return (
    <div className="flex justify-center items-center bg-primary_blue ">
      <Form
        name="normal_login"
        className="login-form bg-connexion_login w-80 h-auto rounded-3xl border-solid	border-2 border-black"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          className="pr-4 pl-4 pt-20"
          name="email"
          rules={[
            {
              required: true,
              message: "Veuillez entrer votre adresse email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          className="pr-4 pl-4"
          name="username"
          rules={[
            {
              required: true,
              message: "Veuillez entrer votre identifiant!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Identifiant"
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
        <Form.Item
          className="pr-4 pl-4"
          name="passwordConfirm"
          rules={[
            {
              required: true,
              message: "Veuillez confirmez votre mot de passe!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirmez votre mot de passe"
          />
        </Form.Item>
        <Form.Item>
          <p className="login-form-forgot"> Déjà inscrit ? Connectez-vous</p>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button text-black border-solid border-1 border-sky-500"
          >
            Inscritpion
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
