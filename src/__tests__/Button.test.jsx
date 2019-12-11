import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../client/components/Button';

Enzyme.configure({adapter: new Adapter()});

describe('Button component', () => {
    test('snapshot', () => {
        const component = renderer.create(
            <Button onClick={() => 0} title="Hello" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

it('should trigger callback when the button is clicked', () => {
    let x = 0;
    const component = shallow(
        <Button onClick={() => { x += 1; }} title="Hello" />
    );
    component.find('.btn').simulate('click');
    expect(x).toBe(1);
});
