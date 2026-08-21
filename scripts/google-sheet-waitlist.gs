/**
 * Spara waitlist -> Google Sheet
 *
 * Setup:
 *  1. Open the Google Sheet that should collect signups.
 *  2. Extensions > Apps Script. Delete the placeholder and paste this file.
 *  3. Set SHARED_SECRET below to a long random string (or leave "" to disable the check).
 *  4. Deploy > New deployment > type "Web app".
 *       - Execute as: Me
 *       - Who has access: Anyone
 *     Copy the /exec URL it gives you.
 *  5. Put that URL in GOOGLE_SHEETS_WEBHOOK_URL (.env.local locally, Vercel env var in prod).
 *     If you set SHARED_SECRET, use the same value for GOOGLE_SHEETS_SHARED_SECRET.
 *
 * Re-deploy note: after editing this script, use Deploy > Manage deployments >
 * edit the existing deployment > Version: New version. Otherwise the old code keeps serving.
 */

var SHEET_NAME = "Waitlist";
var SHARED_SECRET = "";
var HEADERS = ["Timestamp", "Email", "Source", "User Agent"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return jsonOut({ ok: false, error: "busy" });
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOut({ ok: false, error: "empty body" });
    }

    var body = JSON.parse(e.postData.contents);

    if (SHARED_SECRET && body.secret !== SHARED_SECRET) {
      return jsonOut({ ok: false, error: "unauthorized" });
    }

    var email = String(body.email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonOut({ ok: false, error: "invalid email" });
    }

    var sheet = getSheet();

    // Skip duplicates instead of writing the same address twice.
    if (sheet.getLastRow() > 1) {
      var existing = sheet
        .getRange(2, 2, sheet.getLastRow() - 1, 1)
        .getValues()
        .map(function (row) {
          return String(row[0]).trim().toLowerCase();
        });
      if (existing.indexOf(email) !== -1) {
        return jsonOut({ ok: true, duplicate: true });
      }
    }

    sheet.appendRow([
      body.submittedAt || new Date().toISOString(),
      email,
      String(body.source || "unknown"),
      String(body.userAgent || ""),
    ]);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return jsonOut({ ok: true, service: "spara-waitlist" });
}

function getSheet() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = doc.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
