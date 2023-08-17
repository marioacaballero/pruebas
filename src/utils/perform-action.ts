import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

type Options = {
  path?: string;
  url?: string;
  text?: string;
  message?: string;
  dialogId?: string;
  duration?: number;
  target?: string;
};

export const performAction = (action: string, options: Options) => {
  switch (action) {
    case "navigate":
      if (options.path) {
        window.open(options.path, options.target);
      }
      break;
    case "download":
      if (options.url) {
        fetch(options.url)
          .then((response) => response.text())
          .then((htmlContent) => {
            const blob = new Blob([htmlContent], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${options.url}`;
            link.click();
          })
          .catch((error) => {
            console.error("Error fetching HTML:", error);
          });
      }
      break;
    case "copy":
      if (options.text) {
        navigator.clipboard.writeText(options.text);
      }
      break;
    case "toast":
      if (options.message) {
        Toastify({
          text: options.message,
          duration: options.duration || 3000,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
        }).showToast();
      }
      break;
    case "refresh":
      window.location.reload();
      break;
    case "alert":
      if (options.message) {
        alert(options.message);
      }
      break;
    case "closeDialog":
      if (options.dialogId) {
        const dialog = document.getElementById(
          options.dialogId
        ) as HTMLDialogElement;
        if (dialog) {
          dialog.close();
        }
      } else {
        const openDialog = document.querySelector("dialog[open]");
        if (openDialog) {
          (openDialog as HTMLDialogElement).close();
        }
      }
      break;
    default:
      console.log("Invalid action");
  }
};

// Ejemplo de uso
// performAction('navigate', { path: '/example', target: '_blank' });
// performAction('download', { url: 'https://example.com/file.pdf' });
// performAction('copy', { text: 'Copied text' });
// performAction('toast', { message: 'Hello Toast', duration: 5000 });
// performAction('refresh');
// performAction('alert', { message: 'This is an alert' });
// performAction('closeDialog', { dialogId: 'dialogId' });
// performAction('closeDialog');
