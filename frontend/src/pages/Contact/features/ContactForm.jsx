// src/components/ContactForm.jsx

import '../styles/ContactForm.css';
import MapSection from './MapSection';
import { Form,Input,Select,Button } from 'antd';
const { TextArea } = Input;
function ContactForm() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="form-wrapper">
            <h3>Gửi Tin Nhắn</h3>
              <Form layout="vertical">
                  <Form.Item label = "Họ và tên *" name="vertical" required tooltip="This is a required field">
                      <Input placeholder="Nhập họ và tên"/>
                  </Form.Item>

                  <Form.Item label = "Email *" required tooltip="This is a required field">
                      <Input placeholder="Nhập email"/>
                  </Form.Item>
                  
                  <Form.Item label = "Số điện thoại *" required tooltip="This is a required field">
                      <Input placeholder="Nhập số điện thoại"/>
                  </Form.Item>

                  <Form.Item label="Dịch vụ quan tâm" required tooltip="This is a required field">
                    <Select  defaultValue="lucy"
                      options = {[{label: "Value1", value: "value1"}]} >
                    </Select>
                  </Form.Item>

                   <Form.Item label = "Chủ đề" required tooltip="This is a required field">
                      <Input placeholder="Nhập chủ đề"/>
                  </Form.Item>

                  <Form.Item label="Tin nhắn *" required tooltip="This is a required field">
                      <TextArea rows= {4} placeholder="Nhập tin nhắn của bạn..."></TextArea>
                  </Form.Item>


                   <Form.Item label = {null}>
                      <Button type="primary" htmlType="submit">
                        ✉️ Gửi tin nhắn
                    </Button>
                  </Form.Item>
              </Form>
          </div>

          <MapSection/>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;