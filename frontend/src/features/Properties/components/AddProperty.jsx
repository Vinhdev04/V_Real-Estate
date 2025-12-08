import React, { useState, useRef } from 'react';
import {
    Input,
    Select,
    Button,
    InputNumber,
    message,
    Row,
    Col,
    Card,
    Divider,
    Form
} from 'antd';
import {
    PlusOutlined,
    DeleteOutlined,
    BoldOutlined,
    ItalicOutlined,
    UnderlineOutlined,
    OrderedListOutlined,
    UnorderedListOutlined,
    HomeOutlined,
    DollarOutlined,
    EnvironmentOutlined,
    PictureOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import '../styles/AddProperty.css';

const { Option } = Select;
const { TextArea } = Input;

function AddProperty() {
    const [form] = Form.useForm();
    const [imageUrls, setImageUrls] = useState(['']);
    const [detailContent, setDetailContent] = useState('');
    const editorRef = useRef(null);

    const applyFormat = (command, value = null) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
    };

    const handleEditorInput = () => {
        if (editorRef.current) {
            setDetailContent(editorRef.current.innerHTML);
        }
    };

    const handleAddImageUrl = () => {
        setImageUrls([...imageUrls, '']);
    };

    const handleImageUrlChange = (index, value) => {
        const newUrls = [...imageUrls];
        newUrls[index] = value;
        setImageUrls(newUrls);
    };

    const handleRemoveImageUrl = (index) => {
        const newUrls = imageUrls.filter((_, i) => i !== index);
        setImageUrls(newUrls);
    };

    const handleSubmit = async (values) => {
        try {
            const validImages = imageUrls.filter((url) => url.trim() !== '');

            const payload = {
                postData: {
                    title: values.title,
                    price: values.price,
                    address: values.address,
                    city: values.city,
                    bedroom: values.bedroom || 0,
                    bathroom: values.bathroom || 0,
                    latitude: values.latitude || '',
                    longitude: values.longitude || '',
                    description: values.description || '',
                    type: values.type,
                    property: values.property,
                    images: validImages
                },
                postDetail: {
                    content: detailContent,
                    utilities: values.utilities || '',
                    pet: values.pet,
                    income: values.income || '',
                    size: values.size || 0,
                    school: values.school || 0,
                    bus: values.bus || 0,
                    restaurant: values.restaurant || 0
                }
            };

            console.log('Payload:', JSON.stringify(payload, null, 2));
            message.success('Thêm bất động sản thành công!');

            // Reset form
            form.resetFields();
            setImageUrls(['']);
            setDetailContent('');
            if (editorRef.current) {
                editorRef.current.innerHTML = '';
            }
        } catch (error) {
            message.error('Có lỗi xảy ra khi thêm bất động sản!');
            console.error(error);
        }
    };

    return (
        <div className='add-property'>
            <div className='add-property__container'>
                <div className='add-property__header'>
                    <h1 className='add-property__title'>
                        <HomeOutlined /> Thêm Bất Động Sản
                    </h1>
                </div>

                <Form
                    form={form}
                    onFinish={handleSubmit}
                    layout='vertical'
                    initialValues={{
                        type: 'rent',
                        property: 'apartment',
                        pet: 'Allowed',
                        bedroom: 0,
                        bathroom: 0,
                        size: 0,
                        school: 0,
                        bus: 0,
                        restaurant: 0,
                        price: 0
                    }}
                >
                    {/* Basic Information */}
                    <Card className='add-property__card' bordered={false}>
                        <h2 className='add-property__section-title'>
                            <HomeOutlined /> Thông Tin Cơ Bản
                        </h2>
                        <Divider />

                        <Row gutter={[16, 16]}>
                            <Col xs={24}>
                                <Form.Item
                                    label='Tiêu đề'
                                    name='title'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập tiêu đề!'
                                        }
                                    ]}
                                >
                                    <Input
                                        placeholder='Nhập tiêu đề bất động sản'
                                        size='large'
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label='Loại giao dịch'
                                    name='type'
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Vui lòng chọn loại giao dịch!'
                                        }
                                    ]}
                                >
                                    <Select size='large'>
                                        <Option value='rent'>Cho thuê</Option>
                                        <Option value='buy'>Bán</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label='Loại bất động sản'
                                    name='property'
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Vui lòng chọn loại bất động sản!'
                                        }
                                    ]}
                                >
                                    <Select size='large'>
                                        <Option value='apartment'>
                                            Căn hộ
                                        </Option>
                                        <Option value='house'>Nhà riêng</Option>
                                        <Option value='villa'>Biệt thự</Option>
                                        <Option value='land'>Đất nền</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label='Thành phố'
                                    name='city'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn thành phố!'
                                        }
                                    ]}
                                >
                                    <Select
                                        placeholder='Chọn thành phố'
                                        size='large'
                                    >
                                        <Option value='HCM'>Hồ Chí Minh</Option>
                                        <Option value='HN'>Hà Nội</Option>
                                        <Option value='DN'>Đà Nẵng</Option>
                                        <Option value='BD'>Bình Dương</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label='Giá (VNĐ)'
                                    name='price'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập giá!'
                                        }
                                    ]}
                                >
                                    <InputNumber
                                        placeholder='Nhập giá'
                                        formatter={(value) =>
                                            `${value}`.replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ','
                                            )
                                        }
                                        parser={(value) =>
                                            value.replace(/\$\s?|(,*)/g, '')
                                        }
                                        size='large'
                                        min={0}
                                        style={{ width: '100%' }}
                                        prefix={<DollarOutlined />}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label='Địa chỉ'
                                    name='address'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập địa chỉ!'
                                        }
                                    ]}
                                >
                                    <Input
                                        placeholder='Nhập địa chỉ chi tiết'
                                        size='large'
                                        prefix={<EnvironmentOutlined />}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Form.Item label='Phòng ngủ' name='bedroom'>
                                    <InputNumber
                                        placeholder='0'
                                        size='large'
                                        min={0}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Form.Item label='Phòng tắm' name='bathroom'>
                                    <InputNumber
                                        placeholder='0'
                                        size='large'
                                        min={0}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Form.Item label='Diện tích (m²)' name='size'>
                                    <InputNumber
                                        placeholder='0'
                                        size='large'
                                        min={0}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label='Vĩ độ (Latitude)'
                                    name='latitude'
                                >
                                    <Input
                                        placeholder='10.768043027344376'
                                        size='large'
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label='Kinh độ (Longitude)'
                                    name='longitude'
                                >
                                    <Input
                                        placeholder='106.68810597954128'
                                        size='large'
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24}>
                                <Form.Item
                                    label='Mô tả ngắn'
                                    name='description'
                                >
                                    <TextArea
                                        placeholder='Mô tả ngắn gọn về bất động sản'
                                        rows={3}
                                        size='large'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>

                    {/* Images Section */}
                    <Card className='add-property__card' bordered={false}>
                        <h2 className='add-property__section-title'>
                            <PictureOutlined /> Hình Ảnh
                        </h2>
                        <Divider />

                        <Row gutter={[16, 16]}>
                            {imageUrls.map((url, index) => (
                                <Col xs={24} key={index}>
                                    <Row gutter={8}>
                                        <Col flex='auto'>
                                            <Input
                                                placeholder='Nhập URL hình ảnh'
                                                value={url}
                                                onChange={(e) =>
                                                    handleImageUrlChange(
                                                        index,
                                                        e.target.value
                                                    )
                                                }
                                                size='large'
                                                addonBefore={`Ảnh ${index + 1}`}
                                            />
                                        </Col>
                                        {imageUrls.length > 1 && (
                                            <Col>
                                                <Button
                                                    danger
                                                    icon={<DeleteOutlined />}
                                                    onClick={() =>
                                                        handleRemoveImageUrl(
                                                            index
                                                        )
                                                    }
                                                    size='large'
                                                >
                                                    Xóa
                                                </Button>
                                            </Col>
                                        )}
                                    </Row>
                                </Col>
                            ))}

                            <Col xs={24}>
                                <Button
                                    type='dashed'
                                    icon={<PlusOutlined />}
                                    onClick={handleAddImageUrl}
                                    size='large'
                                    block
                                >
                                    Thêm URL hình ảnh
                                </Button>
                            </Col>

                            {imageUrls.some((url) => url.trim()) && (
                                <Col xs={24}>
                                    <Divider orientation='left'>
                                        Xem trước hình ảnh
                                    </Divider>
                                    <Row gutter={[16, 16]}>
                                        {imageUrls
                                            .filter((url) => url.trim())
                                            .map((url, index) => (
                                                <Col
                                                    xs={24}
                                                    sm={12}
                                                    md={8}
                                                    lg={6}
                                                    key={index}
                                                >
                                                    <div className='add-property__preview-item'>
                                                        <img
                                                            src={url}
                                                            alt={`Preview ${
                                                                index + 1
                                                            }`}
                                                        />
                                                    </div>
                                                </Col>
                                            ))}
                                    </Row>
                                </Col>
                            )}
                        </Row>
                    </Card>

                    {/* Detail Information */}
                    <Card className='add-property__card' bordered={false}>
                        <h2 className='add-property__section-title'>
                            <FileTextOutlined /> Thông Tin Chi Tiết
                        </h2>
                        <Divider />

                        <Row gutter={[16, 16]}>
                            <Col xs={24}>
                                <label className='add-property__label'>
                                    Nội dung chi tiết
                                </label>
                                <div className='add-property__editor-wrapper'>
                                    <div className='add-property__editor-toolbar'>
                                        <Button
                                            icon={<BoldOutlined />}
                                            onClick={() => applyFormat('bold')}
                                            title='Bold'
                                        />
                                        <Button
                                            icon={<ItalicOutlined />}
                                            onClick={() =>
                                                applyFormat('italic')
                                            }
                                            title='Italic'
                                        />
                                        <Button
                                            icon={<UnderlineOutlined />}
                                            onClick={() =>
                                                applyFormat('underline')
                                            }
                                            title='Underline'
                                        />
                                        <span className='add-property__editor-divider' />
                                        <Button
                                            icon={<OrderedListOutlined />}
                                            onClick={() =>
                                                applyFormat('insertOrderedList')
                                            }
                                            title='Numbered List'
                                        />
                                        <Button
                                            icon={<UnorderedListOutlined />}
                                            onClick={() =>
                                                applyFormat(
                                                    'insertUnorderedList'
                                                )
                                            }
                                            title='Bullet List'
                                        />
                                        <span className='add-property__editor-divider' />
                                        <select
                                            className='add-property__editor-select'
                                            onChange={(e) =>
                                                applyFormat(
                                                    'formatBlock',
                                                    e.target.value
                                                )
                                            }
                                            defaultValue=''
                                        >
                                            <option value=''>Paragraph</option>
                                            <option value='h1'>
                                                Heading 1
                                            </option>
                                            <option value='h2'>
                                                Heading 2
                                            </option>
                                            <option value='h3'>
                                                Heading 3
                                            </option>
                                        </select>
                                    </div>
                                    <div
                                        ref={editorRef}
                                        className='add-property__editor'
                                        contentEditable
                                        onInput={handleEditorInput}
                                        suppressContentEditableWarning
                                        placeholder='Nhập nội dung chi tiết về bất động sản...'
                                    />
                                </div>
                            </Col>

                            <Col xs={24}>
                                <Form.Item label='Tiện ích' name='utilities'>
                                    <Input
                                        placeholder='VD: Wifi, Hồ bơi, Gym, Thang máy, An ninh 24/7'
                                        size='large'
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label='Chính sách thú cưng'
                                    name='pet'
                                >
                                    <Select size='large'>
                                        <Option value='Allowed'>
                                            Cho phép
                                        </Option>
                                        <Option value='Not Allowed'>
                                            Không cho phép
                                        </Option>
                                        <Option value='Negotiable'>
                                            Có thể thương lượng
                                        </Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label='Yêu cầu thu nhập'
                                    name='income'
                                >
                                    <Input
                                        placeholder='VD: Không yêu cầu, >= 10 triệu/tháng'
                                        size='large'
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Form.Item
                                    label='Trường học gần nhất (km)'
                                    name='school'
                                >
                                    <InputNumber
                                        placeholder='0'
                                        size='large'
                                        min={0}
                                        step={0.1}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Form.Item
                                    label='Bến xe gần nhất (km)'
                                    name='bus'
                                >
                                    <InputNumber
                                        placeholder='0'
                                        size='large'
                                        min={0}
                                        step={0.1}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Form.Item
                                    label='Nhà hàng gần nhất (km)'
                                    name='restaurant'
                                >
                                    <InputNumber
                                        placeholder='0'
                                        size='large'
                                        min={0}
                                        step={0.1}
                                        style={{ width: '100%' }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>

                    <Card
                        className='add-property__card add-property__card--actions'
                        bordered={false}
                    >
                        <Row gutter={16} justify='center'>
                            <Col xs={24} sm={12} md={6}>
                                <Button
                                    size='large'
                                    block
                                    onClick={() => window.history.back()}
                                >
                                    Hủy
                                </Button>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    size='large'
                                    block
                                >
                                    Thêm Bất Động Sản
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Form>
            </div>
        </div>
    );
}

export default AddProperty;
