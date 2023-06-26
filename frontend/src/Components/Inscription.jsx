import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rgpd from "./Rgpd";
import axios from "axios";

export default function Inscription() {
  const [acceptedRGPD, setAcceptedRGPD] = useState(false);
  const navigate = useNavigate();

  const handleRGPDChange = (e) => {
    setAcceptedRGPD(e.target.checked);
  };

  const good = () => {
    toast.success("Vous êtes bien inscrit et connecté !", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = (e) => {
    const email = e.email;
    const regex1 = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const password = e.password;
    const regex2 =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    const username = e.username;
    const passwordConfirm = e.passwordConfirm;

    if (regex1.test(email)) {
      if (regex2.test(password)) {
        if (password === passwordConfirm) {
          const body = { email, username, password };

          const sendForm = async () => {
            try {
              const resregister = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/register`,
                body
              );

              if (resregister.status === 201) {
                const bodylogin = { email, password };
                const reslogin = await axios.post(
                  `${import.meta.env.VITE_BACKEND_URL}/login`,
                  bodylogin
                );
                if (reslogin.status === 200) {
                  good();
                  navigate("/accueil");
                }
              }
            } catch (error) {
              // Gérer les erreurs de requête
              console.error(error);
            }
          };
          sendForm();
        } else {
          console.log("mot de passe ne corresponde pas");
        }
      } else {
        console.log("mot de passe pas assez fort 1min 1maj etcc...");
      }
    } else {
      console.log("email non conformz");
    }
  };

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
            type="email"
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
            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
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
      <ToastContainer />
    </div>
  );
}
