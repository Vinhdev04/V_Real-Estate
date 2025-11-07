// src/components/ContactForm.jsx

import { opt } from '../services/constants';
import '../styles/ContactForm.css';
import MapSection from './MapSection';
import { Form,Input,Select,Button } from 'antd';
const { TextArea } = Input;


function ContactForm() {
  const handleSubmit = (e) => {
    console.log('Form data submitted: ', e);
  }
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="form-wrapper">
            <h3>Gửi Tin Nhắn</h3>
              <Form layout="vertical" onFinish={handleSubmit}>
                  <Form.Item label = "Họ và tên *" name="username" required tooltip="This is a required field"  rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}>
                      <Input placeholder="Nhập họ và tên"/>
                  </Form.Item>

                  <Form.Item label = "Email *" name="user-email" required tooltip="This is a required field" rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
                      <Input placeholder="Nhập email"/>
                  </Form.Item>
                  
                  <Form.Item label = "Số điện thoại *" name="user-phone" required tooltip="This is a required field" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}>
                      <Input placeholder="Nhập số điện thoại"/>
                  </Form.Item>

                  <Form.Item name="user-services" label="Dịch vụ quan tâm"   initialValue="du-an-bat-dong-san" required tooltip="This is a required field" rules={[{ required: true, message: 'Vui lòng nhập dịch vụ quan tâm!' }]}>
                    <Select   placeholder="Chọn dịch vụ"
                          options={opt.map((item) => ({
                            label: item.label,
                            value: item.value,
                    }))}>
                    </Select>
                  </Form.Item>

                   <Form.Item name="user-topic" label = "Chủ đề" required tooltip="This is a required field" rules={[{ required: true, message: 'Vui lòng nhập chủ đề!' }]}>
                      <Input placeholder="Nhập chủ đề"/>
                  </Form.Item>

                  <Form.Item name="user-message" label="Tin nhắn *" required tooltip="This is a required field" rules={[{ required: true, message: 'Vui lòng nhập tin nhắn!' }]}>
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