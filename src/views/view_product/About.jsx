import React, { useEffect, useRef, useState } from 'react';
import Collapsible from '@/components/common/Collapsible';

const IngredientsContent = (<div style={{ fontSize: 16, lineHeight: 2, margin: 30 }}>
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
</div>)



const About = () => {
  return (
    <div>
      <div>
        <Collapsible
          heading="Ingredients"
          content={IngredientsContent} />
      </div>
      <div>
        <Collapsible
          heading="Nutrition"
          content={IngredientsContent} />
      </div>
      <div>
        <Collapsible
          heading="Reviews"
          content={IngredientsContent} />
      </div>
    </div>
  )
}

export default About;