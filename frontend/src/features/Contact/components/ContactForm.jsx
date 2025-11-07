import { opt } from "../services/constants";
import "../styles/ContactForm.css";
import { handleSubmitSuccess, handleSubmitError } from "../services/handleForm";
import MapSection from "./MapSection";
import { Form, Input, Select, Button } from "antd";
import { useState } from "react";

const { TextArea } = Input;

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      setLoading(true);

      //  Giả lập gửi dữ liệu lên server 
      await new Promise((resolve) => setTimeout(resolve, 1000));
      handleSubmitSuccess(values);

      form.resetFields();
    } catch (error) {
      handleSubmitError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    handleSubmitError("Vui lòng kiểm tra lại thông tin trước khi gửi!");
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="form-wrapper">
            <h3>Gửi Tin Nhắn</h3>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Họ và tên *"
                name="username"
                rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
              >
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>

              <Form.Item
                label="Email *"
                name="user-email"
                rules={[{ required: true, message: "Vui lòng nhập email!" }]}
              >
                <Input placeholder="Nhập email" />
              </Form.Item>

              <Form.Item
                label="Số điện thoại *"
                name="user-phone"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                ]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>

              <Form.Item
                name="user-services"
                label="Dịch vụ quan tâm"
                initialValue="du-an-bat-dong-san"
                rules={[
                  { required: true, message: "Vui lòng chọn dịch vụ quan tâm!" },
                ]}
              >
                <Select
                  placeholder="Chọn dịch vụ"
                  options={opt.map((item) => ({
                    label: item.label,
                    value: item.value,
                  }))}
                />
              </Form.Item>

              <Form.Item
                name="user-topic"
                label="Chủ đề"
                rules={[{ required: true, message: "Vui lòng nhập chủ đề!" }]}
              >
                <Input placeholder="Nhập chủ đề" />
              </Form.Item>

              <Form.Item
                name="user-message"
                label="Tin nhắn *"
                rules={[{ required: true, message: "Vui lòng nhập tin nhắn!" }]}
              >
                <TextArea rows={4} placeholder="Nhập tin nhắn của bạn..." />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  ✉️ Gửi tin nhắn
                </Button>
              </Form.Item>
            </Form>
          </div>

          <MapSection />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
