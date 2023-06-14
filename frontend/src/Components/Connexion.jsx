import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { toast, ToastContainer } from "react-toastify";
import dbUsers from "./db_users.json";
import "react-toastify/dist/ReactToastify.css";

export default function Connexion() {
  const onFinish = (values) => {
    const matchedUser = dbUsers.find((user) => {
      return user.email === values.email && user.password === values.password;
    });

    const good = () => {
      toast.success("Vous êtes bien connecté !", {
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

    const wrong = () => {
      toast.error("Mauvais email ou mot de passe!", {
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

    if (matchedUser) {
      setTimeout(() => {
        window.location.href = "/accueil";
      }, 3000);
      good();
    } else {
      wrong();
    }
  };
  return (
    <div className="flex justify-center items-center bg-primary_blue">
      <Form
        name="normal_login"
        className="login-form bg-connexion_login w-80 h-auto rounded-3xl border-solid border-2 border-black"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          className="pr-4 pl-4 pt-20"
          name="email"
          rules={[
            {
              required: true,
              message: "Veuillez entrer votre adresse email !",
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
              message: "Veuillez entrer votre mot de passe !",
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
            <Checkbox className="pb-2">Se souvenir de moi</Checkbox>
          </Form.Item>
          <p className="login-form-forgot">Mot de passe oublié ?</p>
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
      <ToastContainer />
    </div>
  );
}
