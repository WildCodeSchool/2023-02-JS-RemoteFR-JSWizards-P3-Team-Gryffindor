import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Radio, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function OeuvreForm() {
  return (
    <div className=" flex justify-center  mt-40">
      <Form
        className="bg-primary_black pt-10 pb-10 px-10 rounded-3xl w-[640px] border-solid	border-2 border-black"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Auteur">
          <Input />
        </Form.Item>
        <Form.Item label="Titre">
          <Input />
        </Form.Item>
        <FormItem label="Couleur">
          <Radio.Group label="couleur">
            <Radio value="true"> Oui </Radio>
            <Radio value="false"> Non </Radio>
          </Radio.Group>
        </FormItem>
        <Form.Item label="Date création">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default OeuvreForm;
