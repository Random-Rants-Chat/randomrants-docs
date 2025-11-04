import React from "react";
import AdmonitionTypeNote from "@theme/Admonition/Type/Note";
import AdmonitionTypeTip from "@theme/Admonition/Type/Tip";
import AdmonitionTypeInfo from "@theme/Admonition/Type/Info";
import AdmonitionTypeCaution from "@theme/Admonition/Type/Caution";
import AdmonitionTypeWarning from "@theme/Admonition/Type/Warning";
import AdmonitionTypeDanger from "@theme/Admonition/Type/Danger";
import AdmonitionTypeJoke from "@theme/Admonition/Type/Joke";
import type AdmonitionTypes from "@theme/Admonition/Types";
import type { Props } from "@theme/Admonition";

const admonitionTypes: typeof AdmonitionTypes = {
  note: AdmonitionTypeNote,
  tip: AdmonitionTypeTip,
  info: AdmonitionTypeInfo,
  caution: AdmonitionTypeCaution,
  danger: AdmonitionTypeDanger,
  joke: AdmonitionTypeJoke,
};

// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases: typeof AdmonitionTypes = {
  secondary: (props: Props) => (
    <AdmonitionTypeNote title="secondary" {...props} />
  ),
  joke: (props: Props) => <AdmonitionTypeJoke title="joke" {...props} />,
  important: (props: Props) => (
    <AdmonitionTypeInfo title="important" {...props} />
  ),
  success: (props: Props) => <AdmonitionTypeTip title="success" {...props} />,
  warning: (props: Props) => (
    <AdmonitionTypeWarning title="warning" {...props} />
  ),
};

export default {
  ...admonitionTypes,
  ...admonitionAliases,
};
