import React, { useEffect, useRef, useState } from 'react';
import CustomizedTables from './NutritionContent';
import RateComment from './Ratings';

import { Collapse } from 'antd';
const { Panel } = Collapse;
const IngredientsContent = () => (<div style={{ fontSize: 14, lineHeight: 2, margin: 30, marginTop: 0 }}>
  Rolled Oats (50%), Foxtail Millet (Navane) (20%), Mixed Masala Powder (20%)
  (Maltodextrin, Iodised Salt, Mixed Spices, Refined Sugar, Natural Flavor, Hydrolyzed
  Vegetable Protein, Anticaking  (627, 631)), Jowar (5%), Dried Vegetables
  (Carrots-1.2%, Onion-0.8%, Peas-0.6%), Palm Oil, Maltodextrin, Dried Coriander Leaves (0.2%),
  Antioxidant (320).
  Rolled Oats (50%), Foxtail Millet (Navane) (20%), Mixed Masala Powder (20%)
  (Maltodextrin, Iodised Salt, Mixed Spices, Refined Sugar, Natural Flavor, Hydrolyzed
  Vegetable Protein, Anticaking  (627, 631)), Jowar (5%), Dried Vegetables
  (Carrots-1.2%, Onion-0.8%, Peas-0.6%), Palm Oil, Maltodextrin, Dried Coriander Leaves (0.2%),
  Antioxidant (320).
</div>);

const AboutProduct = () => (
  <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    accordion size="large" >
    <Panel header="Ingredients" key="1" style={{ marginTop: 24, backgroundColor: "white" }}>
      <IngredientsContent />
    </Panel>
    <Panel header="Nutrition" key="2" style={{ marginTop: 24, backgroundColor: "white" }}>
      <CustomizedTables />
    </Panel>
    <Panel header="Reviews" key="3" style={{ marginTop: 24, backgroundColor: "white" }}>
      <RateComment />
    </Panel>
  </Collapse>
);
export default AboutProduct;