import * as React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

it('app loads without error', () => {
    const component = renderer.create(
        <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});