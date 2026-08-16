use serde::{Deserialize, Serialize};
use tauri::generate_handler;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Debug, Serialize, Deserialize, Clone)]
struct Payin {
    id: String,
    num: String
}

#[tauri::command]
fn get_list() -> Vec<Payin> {
    let mut payin: Vec<Payin> = Vec::new();
    payin.push(Payin { id: String::from("123-123"), num: String::from("123-123") });
    payin
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(generate_handler![greet])
        .invoke_handler(generate_handler![get_list])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
