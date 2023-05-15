import { useState } from "react";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SendMessageForm from "./SendMessageForm";
import SendCompanyForm from "./SendCompanyForm";
import { AiOutlineClose } from "react-icons/ai";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabComponent() {
  const [value, setValue] = React.useState(0);
  const [show, setShow] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setShow(false);
    console.log("clicked");
  };
  if (!show) {
    return null;
  }

  return (
    <>
      <Box sx={{ width: "100%" }} className="relative modal">
        <div className="flex justify-end">
          <button onClick={handleClose}>
            <AiOutlineClose />
          </button>
        </div>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Individual" {...a11yProps(0)} />
            <Tab label="Company" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SendMessageForm party="As an individual" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SendCompanyForm party="As a Company" />
        </TabPanel>
      </Box>
    </>
  );
}
