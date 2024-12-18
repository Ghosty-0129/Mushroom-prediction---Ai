import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, Spin } from 'antd';
import axios from 'axios';
import './MushroomPredictor.css';

const { Title, Paragraph } = Typography;

const MushroomPredictor = () => {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        capDiameter: values.capDiameter,
        stemHeight: values.stemHeight,
        stemWidth: values.stemWidth,
        capShape: values.capShape,
        capSurface: values.capSurface,
        capColor: values.capColor,
        doesBruiseOrBleed: values.doesBruiseOrBleed,
        gillAttachment: values.gillAttachment,
        gillSpacing: values.gillSpacing,
        gillColor: values.gillColor,
        stemRoot: values.stemRoot,
        stemSurface: values.stemSurface,
        stemColor: values.stemColor,
        veilType: values.veilType,
        veilColor: values.veilColor,
        hasRing: values.hasRing,
        ringType: values.ringType,
        sporePrintColor: values.sporePrintColor,
        habitat: values.habitat,
        season: values.season
      });
      const result = response.data.prediction === 0 ? 'Edible' : 'Poisonous';
      setPrediction(result);
    } catch (error) {
      console.error('Error making request:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <Card>
          <Title level={2}>Mushroom Edibility Predictor</Title>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Cap Diameter" name="capDiameter">
              <Input placeholder="Enter cap diameter" />
            </Form.Item>
            <Form.Item label="Stem Height" name="stemHeight">
              <Input placeholder="Enter stem height" />
            </Form.Item>
            <Form.Item label="Stem Width" name="stemWidth">
              <Input placeholder="Enter stem width" />
            </Form.Item>
            <Form.Item label="Cap Shape" name="capShape">
              <Input placeholder="Enter cap shape" />
            </Form.Item>
            <Form.Item label="Cap Surface" name="capSurface">
              <Input placeholder="Enter cap surface" />
            </Form.Item>
            <Form.Item label="Cap Color" name="capColor">
              <Input placeholder="Enter cap color" />
            </Form.Item>
            <Form.Item label="Does Bruise or Bleed" name="doesBruiseOrBleed">
              <Input placeholder="Enter bruise or bleed info" />
            </Form.Item>
            <Form.Item label="Gill Attachment" name="gillAttachment">
              <Input placeholder="Enter gill attachment" />
            </Form.Item>
            <Form.Item label="Gill Spacing" name="gillSpacing">
              <Input placeholder="Enter gill spacing" />
            </Form.Item>
            <Form.Item label="Gill Color" name="gillColor">
              <Input placeholder="Enter gill color" />
            </Form.Item>
            <Form.Item label="Stem Root" name="stemRoot">
              <Input placeholder="Enter stem root" />
            </Form.Item>
            <Form.Item label="Stem Surface" name="stemSurface">
              <Input placeholder="Enter stem surface" />
            </Form.Item>
            <Form.Item label="Stem Color" name="stemColor">
              <Input placeholder="Enter stem color" />
            </Form.Item>
            <Form.Item label="Veil Type" name="veilType">
              <Input placeholder="Enter veil type" />
            </Form.Item>
            <Form.Item label="Veil Color" name="veilColor">
              <Input placeholder="Enter veil color" />
            </Form.Item>
            <Form.Item label="Has Ring" name="hasRing">
              <Input placeholder="Enter ring information" />
            </Form.Item>
            <Form.Item label="Ring Type" name="ringType">
              <Input placeholder="Enter ring type" />
            </Form.Item>
            <Form.Item label="Spore Print Color" name="sporePrintColor">
              <Input placeholder="Enter spore print color" />
            </Form.Item>
            <Form.Item label="Habitat" name="habitat">
              <Input placeholder="Enter habitat" />
            </Form.Item>
            <Form.Item label="Season" name="season">
              <Input placeholder="Enter season" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Predict
              </Button>
            </Form.Item>
          </Form>
          {loading && <Spin size="large" />}
          {prediction && (
            <Paragraph style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '20px' }}>
              The mushroom is {prediction}.
            </Paragraph>
          )}
        </Card>
      </div>
    </div>
  );
};

export default MushroomPredictor;
