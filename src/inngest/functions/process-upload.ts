import { inngest } from "../client";

export const processUploadFunction =
  inngest.createFunction(
    {
      id: "process-upload",

      triggers: [
        {
          event: "upload/process",
        },
      ],
    },
    async ({ event }) => {
      console.log(event.data);
    }
  );