import { SearchForm } from "./searchForm";

const handleButtonClick = () => {
    alert(`Click button call`);
  };

export default {
    title: "components/SearchForm",
    component: SearchForm,
    args: {
        onSearch: handleButtonClick,
        initialValue: 'InterStellar'
    }
};

const Template = (args) => <SearchForm {...args} />;
export const FirstSearchForm = Template.bind({});