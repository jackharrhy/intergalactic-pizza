import React, {PureComponent} from 'react';

import Product from './Product';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './custom-react-tabs.css';

/*
*/
class Shop extends PureComponent {
  render() {
    const {
      products,
      onBuy,
      bal,
    } = this.props;

    return (
      <div className="shopDiv">
        <Tabs>
          <TabList>
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
          </TabList>
          {
            [0,1,2].map((type) => (
              <TabPanel key={`${type}`}>
                {
                  Object.values(products)
                    .filter((product) => product.type === type)
                    .map((product) => (
                      <Product
                        key={product.name}
                        onBuy={onBuy}
                        bal={bal}
                        {...product}
                      />
                    ))
                }
              </TabPanel>
            ))
          }
        </Tabs>
      </div>
    );
  }
}

export default Shop;
