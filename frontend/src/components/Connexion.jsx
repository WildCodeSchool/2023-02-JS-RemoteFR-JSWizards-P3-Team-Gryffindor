import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

export default function Connexion() {
  const navigate = useNavigate();

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

  const handleInscriptionClick = () => {
    navigate("/inscription");
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
          good();
          navigate("/accueil");
        }
      } catch (error) {
        wrong();
      }
    };
    sendForm();
  };
  return (
    <div className="flex justify-center items-center h-[45rem] bg-primary_blue">
      <Form
        name="normal_login"
        className="login-form bg-connexion_login w-80 h-auto rounded-3xl border-solid border-2 border-black"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
      >
        <h1 className="text-2xl font-medium	pt-5">Bienvenue</h1>
        <Form.Item
          className="pr-4 pl-4 pt-10"
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
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mot de passe"
          />
        </Form.Item>
        <Form.Item>
          <p className="login-form-forgot">
            Pas de compte ?&nbsp;
            <a
              href="#"
              className="text-regiser_b hover:underline hover:text-regiser_b"
              onClick={handleInscriptionClick}
            >
              Inscrivez-vous
            </a>
          </p>
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
