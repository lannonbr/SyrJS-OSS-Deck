import { swiss } from "mdx-deck/themes";

import prism from "react-syntax-highlighter/dist/styles/prism/prism";

export default {
  ...swiss,
  prism: {
    style: prism
  }
};