/* All related whit the Button component its needed for references, 
dont delete! */

import Button from "./Button";

export default {
    title: "components/Button",
    component: Button,
    args: {
        children: "Button"
    }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: "primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    type: "tertiary"
}