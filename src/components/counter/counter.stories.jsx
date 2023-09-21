import Counter from "./counter";

export default {
    title: "components/Counter",
    component: Counter,
    args: {
        initialValue: 1
    }
};

const Template = (args) => <Counter {...args} />;
export const Primary = Template.bind({});