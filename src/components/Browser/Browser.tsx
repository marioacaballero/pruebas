import { useState } from "react";
import Navigate from "./Navigate";
import Download from "./Download";
import Clipboard from "./Clipboard";
import Pop from "./Pop";
import Refresh from "./Refresh";
import OpenDialog from "./OpenDialog";
import CloseDialog from "./CloseDialog";

export default function Browser() {
  const [action, setAction] = useState<string>("navigate");

  const onChangeSelectAction = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAction(e.target.value);
  };

  return (
    <>
      <select onChange={(e) => onChangeSelectAction(e)}>
        <option value="navigate">Navigate to Page</option>
        <option value="download">Download File from URL</option>
        <option value="copy">Copy to Clipboard</option>
        <option value="toast">Pop a toast</option>
        <option value="alert">Open a dialog</option>
        <option value="closeDialog">Close a dialog</option>
        <option value="refresh">Soft Refresh Page</option>
      </select>

      {action == "navigate" ? (
        <Navigate action={action} key="browserNavigate" />
      ) : (
        <></>
      )}
      {action == "download" ? (
        <Download action={action} key="browserDownload" />
      ) : (
        <></>
      )}
      {action == "copy" ? (
        <Clipboard action={action} key="browserClipboard" />
      ) : (
        <></>
      )}
      {action == "toast" ? <Pop action={action} key="browserPop" /> : <></>}
      {action == "refresh" ? (
        <Refresh action={action} key="browserRefresh" />
      ) : (
        <></>
      )}
      {action == "closeDialog" ? (
        <CloseDialog action={action} key="browserCloseDialog" />
      ) : (
        <></>
      )}
      {action == "alert" ? (
        <OpenDialog action={action} key="browserOpenDialog" />
      ) : (
        <></>
      )}
    </>
  );
}
