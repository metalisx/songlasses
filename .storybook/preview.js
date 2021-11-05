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

const css = `
.code-container {
  display: flex;
  gap: 10px;
}
.code-container .code-panel {
  flex: 1;
}
.code-container .code-panel .code {
  border: 1px solid var(--sg-divider-color);
  outline: none;
  width: 100%;
  min-height: 340px;
  max-height: 600px;
  resize: none;
}

.selectStyled.sg-select {
  width: 50%;
}
.selectStyled.sg-select sg-select-input {
  border: 1px solid #b07070;
}
.selectStyled.sg-select .sg-select-dropwdown {
  border: 1px solid #a06060;
  background-color: #a06060;
}
.selectStyled.sg-select .sg-select-dropdown-items {
  background-color: #a06060;
}
.selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-item {
  color: #fff;
}
.selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-item:hover {
  background-color: #904040;
  color: #fff;
}
.selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-selected-item-active {
  background-color: #702020;
  color: #fff;
}
.selectStyled.sg-select .sg-select-dropdown-paging {
  background-color: #a06060;
}
`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.body.append(style);

