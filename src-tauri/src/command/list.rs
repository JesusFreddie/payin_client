use serde::{Deserialize, Serialize};

use crate::model::payin::Payin;

#[tauri::command]
pub fn get_list(query: Option<ListQuery>) -> Option<Vec<Payin>> {
    let mut list: Vec<Payin> = Vec::new();
    list.push(Payin::new("123-123", "123-123").unwrap());
    Some(list)
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListQuery {}