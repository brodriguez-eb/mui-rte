import React from "react";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "../../";
import { TMUIRichTextEditorStyles } from "../../";

export const defaultTheme: Theme = createTheme();

const muiRteTheme: TMUIRichTextEditorStyles = {
  overrides: {
    MUIRichTextEditor: {
      root: {
        backgroundColor: "#ebebeb",
      },
      container: {
        display: "flex",
        flexDirection: "column-reverse",
      },
      editor: {
        backgroundColor: "#ebebeb",
        padding: "20px",
        height: "200px",
        maxHeight: "200px",
        overflow: "auto",
      },
      toolbar: {
        borderTop: "1px solid gray",
        backgroundColor: "#ebebeb",
      },
      placeHolder: {
        backgroundColor: "#ebebeb",
        color: defaultTheme.palette.text.primary,
        width: "inherit",
      },
      anchorLink: {
        color: "#333333",
        textDecoration: "underline",
      },
    },
  },
};

Object.assign(defaultTheme, muiRteTheme);

const save = (data: string) => {
  console.log(data);
};

const Themed = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MUIRichTextEditor label="Type something here..." onSave={save} />
    </ThemeProvider>
  );
};

// const Themed = () => {
//   return <MUIRichTextEditor label="Type something here..." onSave={save} />;
// };

export default Themed;
