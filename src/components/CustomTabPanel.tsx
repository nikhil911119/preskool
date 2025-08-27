interface TabPanelProps {
  children?: React.ReactNode; // The content inside the TabPanel
  index: number; // The index of the current TabPanel
  value: number; // The active tab's index
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...others } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...others}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
export default CustomTabPanel;
