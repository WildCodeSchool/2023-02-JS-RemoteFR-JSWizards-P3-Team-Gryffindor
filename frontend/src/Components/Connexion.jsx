import axios from "axios";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../context/useAuth";
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import { info } from "autoprefixer";

export default function Connexion() {
  const navigate = useNavigate();
  const { login } = useAuth();

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

  const handleSubmit = (e) => {
    const { email } = e;
    const { password } = e;
    const body = { email, password };
    const sendForm = async () => {
      try {
        const reslogin = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/login`,
          body
        );
        if (reslogin.status === 200) {
          const jsonadmin = await reslogin.data;
          login({
            admin: jsonadmin.admin,
            email,
            id: jsonadmin.id,
          });
          good();
          navigate("/accueil");
        }
      } catch (error) {
        info(error);
        wrong();
      }
    };
    sendForm();
  };
  return (
    <div className="flex justify-center items-center bg-primary_blue">
      <Form
        name="normal_login"
        className="login-form bg-connexion_login w-80 h-auto rounded-3xl border-solid border-2 border-black"
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
