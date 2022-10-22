import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './Logo';

it('Logo loads without error', () => {
    const component = renderer.create(
        <Logo width={100} height={100} color='#f00' />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});