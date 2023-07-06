import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import Rgpd from "./Rgpd";

export default function Inscription() {
  const [acceptedRGPD, setAcceptedRGPD] = useState(false);

  const handleRGPDChange = (e) => {
    setAcceptedRGPD(e.target.checked);
  };

  const handleSubmit = () => {};

  const info = () => {
    Modal.info({
      title: "This is a notification message",
      content: <Rgpd />,
      width: "80%",
      okButtonProps: {
        className: "bg-blue-500",
      },
      onOk() {},
    });
  };

  return (
    <div className="flex justify-center items-center bg-primary_blue">
      <Form
        name="normal_login"
        className="login-form bg-connexion_login w-80 h-auto rounded-3xl border-solid	border-2 border-black"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
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
              message: "Veuillez confirmer votre mot de passe!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirmez votre mot de passe"
          />
        </Form.Item>
        <Form.Item
          className="pr-8 pl-8"
          name="rgpd"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Veuillez accepter les RGPD!",
            },
          ]}
        >
          <Checkbox className="pr-4 pl-4" onChange={handleRGPDChange}>
            J'accepte les termes et conditions liés à la RGPD.
          </Checkbox>
        </Form.Item>
        {!acceptedRGPD && (
          <Form.Item>
            <p className="text-red-500">
              Veuillez accepter les termes et conditions liés à la RGPD.
            </p>
          </Form.Item>
        )}
        {acceptedRGPD && (
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button text-black border-solid border-1 border-sky-500"
            >
              Inscription
            </Button>
          </Form.Item>
        )}
        <Form.Item>
          <Button onClick={info}>Consulter les CGU</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
