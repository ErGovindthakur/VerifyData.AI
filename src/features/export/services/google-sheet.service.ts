import { google } from "googleapis";

export async function createGoogleSheet(
  accessToken: string,
  title: string
) {
  const auth = new google.auth.OAuth2();

  auth.setCredentials({
    access_token: accessToken,
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  const response =
    await sheets.spreadsheets.create({
      requestBody: {
        properties: {
          title,
        },
      },
    });

  return {
    spreadsheetId:
      response.data.spreadsheetId!,
    spreadsheetUrl:
      response.data.spreadsheetUrl!,
  };
}