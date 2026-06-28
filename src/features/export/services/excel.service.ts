import ExcelJS from "exceljs";
type GenerateExcelParams = Readonly<{
  documentType: string;
  extractedData: Record<string, unknown>;
}>;

export async function generateExcel({ documentType, extractedData }: GenerateExcelParams) {
  const workbook = new ExcelJS.Workbook();

  workbook.creator = "VerifyData.AI";
  workbook.created = new Date();

  switch (documentType) {
    case "INVOICE":
      generateInvoiceSheet(workbook, extractedData);
      break;

    default:
      generateGenericSheet(workbook, extractedData);
  }

  return workbook.xlsx.writeBuffer();
}

function generateInvoiceSheet(workbook: ExcelJS.Workbook, data: Record<string, unknown>) {
  const sheet = workbook.addWorksheet("Invoice");

  sheet.columns = [{ width: 30 }, { width: 40 }, { width: 20 }];

  let row = 1;

  sheet.mergeCells(`A${row}:C${row}`);

  sheet.getCell(`A${row}`).value = "VerifyData.AI";

  sheet.getCell(`A${row}`).font = {
    size: 20,
    bold: true,
  };

  row += 2;

  sheet.getCell(`A${row}`).value = "Invoice Report";

  sheet.getCell(`A${row}`).font = {
    size: 16,
    bold: true,
  };

  row += 2;

const company = String(data.companyName ?? "");

const tagline = String(data.slogan ?? "");

const website = String(data.website ?? "");

const phone = String(data.phoneNumber ?? "");

  sheet.addRow([]);

  sheet.addRow(["Company", company]);

  sheet.addRow(["Tagline", tagline]);

  sheet.addRow(["Website", website]);

  sheet.addRow(["Phone", phone]);

  sheet.addRow([]);

  sheet.addRow(["Order Number", data.orderNumber]);

  sheet.addRow(["Order Type", data.orderType]);

  sheet.addRow(["Date", data.date]);

  sheet.addRow(["Time", data.time]);

  sheet.addRow([]);

  sheet.addRow(["Purchased Items"]);

  sheet.getRow(sheet.lastRow!.number).font = {
    bold: true,
    size: 14,
  };

  const items = (data.items as Array<Record<string, unknown>>) ?? [];

  sheet.addRow(["Item", "Qty", "Unit Price", "Total"]);

  const header = sheet.lastRow!;

  header.font = {
    bold: true,
  };

  header.eachCell((cell) => {
    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };

    cell.alignment = {
      horizontal: "center",
    };
  });

  for (const item of items) {
  const row = sheet.addRow([
    item.item,
    1,
    item.price,
    item.price,
]);

  row.eachCell((cell) => {
    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
  });
}
sheet.addRow([]);

sheet.addRow([
  "Subtotal",
  "",
  "",
  data.subtotal,
]);

sheet.addRow([
  "Total",
  "",
  "",
  data.total,
]);

const totalRow = sheet.lastRow!;

totalRow.font = {
  bold: true,
  size: 13,
};

totalRow.eachCell((cell) => {
  cell.border = {
    top: { style: "medium" },
    bottom: { style: "medium" },
  };
});

console.log("Data : ",data);

console.log("Invoices",items);
}

function generateGenericSheet(workbook: ExcelJS.Workbook, data: Record<string, unknown>) {
  const sheet = workbook.addWorksheet("Data");

  sheet.columns = [{ width: 30 }, { width: 60 }];

  sheet.addRow(["Field", "Value"]);

  for (const [key, value] of Object.entries(data)) {
    sheet.addRow([key, typeof value === "object" ? JSON.stringify(value) : value]);
  }
}
