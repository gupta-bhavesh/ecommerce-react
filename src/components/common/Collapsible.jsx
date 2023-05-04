import React from 'react';
import { useCollapse } from 'react-collapsed';
import PropType from 'prop-types';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const Collapsible = ({ heading, content }) => {
  const config = {
    duration: 500
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className="collapsible">
      <div className="collapsible-header" {...getToggleProps()}>
        <div className="collapsible-header-title">{heading}</div>
        <div className="collapsible-header-button">
          {!isExpanded ? <PlusOutlined /> : <MinusOutlined />}
        </div>
      </div>
      <div className="collapsible-content" {...getCollapseProps()}>
        {content}
      </div>
      <div className="divider"></div>
    </div>
  );
}

Collapsible.propTypes = {
  heading: PropType.string.isRequired,
  content: PropType.element
};

export default Collapsible;