pub mod command;
pub mod model;

use command::list::get_list;
use tauri::generate_handler;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(generate_handler![get_list])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
