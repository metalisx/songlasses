import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}

const css = `.selectStyled.sg-select {
  width: 50%;
}
.selectStyled.sg-select sg-select-input {
  border: 1px solid #b07070;
}
.selectStyled.sg-select .sg-select-items {
  border: 1px solid #a06060;
}
.selectStyled.sg-select .sg-select-items .sg-select-item {
  background-color: #a06060;
  color: #fff;
}
.selectStyled.sg-select .sg-select-items .sg-select-item:hover {
  background-color: #904040;
  color: #fff;
}
.selectStyled.sg-select .sg-select-items .sg-select-selected-item-active {
  background-color: #702020;
  color: #fff;
} 
`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.body.append(style);

