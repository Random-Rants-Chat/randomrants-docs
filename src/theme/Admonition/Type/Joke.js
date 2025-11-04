import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import AdmonitionLayout from "@theme/Admonition/Layout";
import IconInfo from "@theme/Admonition/Icon/Info";
const infimaClassName = "alert alert--info";
const defaultProps = {
  icon: "🤣",
  title: (
    <Translate
      id="theme.admonition.joke"
      description="The default label used for the joke admonition (:::joke)"
    >
      joke
    </Translate>
  ),
};
export default function AdmonitionTypeJoke(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}
    >
      {props.children || (
        <>
          <p>
            This is a joke, it's meant to get people laughing or just a general
            funny thing.
          </p>
        </>
      )}
    </AdmonitionLayout>
  );
}
