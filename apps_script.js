const GAS_URL = "https://script.google.com/macros/s/AKfycbwjT5_7dw1PkQlGXV3EgrLPok_3XZnqLu2LIHp9DtumINPpqofXi9simwihfLLuNbePjg/exec";

// Mengambil daftar prompt dari Apps Script
async function fetchPromptsFromGAS() {
  try {
    const response = await fetch(GAS_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengambil data dari Apps Script:", error);
    return [];
  }
}

// Merekam event 'view' atau 'copy' ke Apps Script
async function trackPromptEvent(id, action) {
  try {
    await fetch(GAS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: String(id),
        action: action
      }),
    });
  } catch (error) {
    console.error(`Gagal merekam event ${action}:`, error);
  }
}